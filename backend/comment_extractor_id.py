from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
import pandas as pd
import json
import googleapiclient.discovery
import dateutil.parser as dp

class CommentStripper:


  def __init__(self,video_id,developer_key):
    self.api_service_name = "youtube"
    self.api_version = "v3"
    self.video_id = video_id
    self.youtube = googleapiclient.discovery.build(self.api_service_name,
                                                   self.api_version,
                                                   developerKey = developer_key)
    self.video_info = None
    self.channel_info = None
    self.raw_comments = None
    self.count = 0

    self.comment_id = []
    self.comment_string = []
    self.comment_likes = []
    self.comment_replies = []
    self.reply_comment = []
    self.parent_comment_id =[]
    self.parent_comment_string = []
    self.comment_channel_id = []
    self.comment_upload_time = []
    self.comment_channel_name = []

    self.comment_id_pop = []
    self.comment_string_pop = []
    self.comment_likes_pop = []
    self.comment_replies_pop = []
    self.reply_comment_pop = []
    self.parent_comment_id_pop =[]
    self.parent_comment_string_pop =[]
    self.comment_channel_id_pop = []
    self.comment_upload_time_pop = []
    self.comment_channel_name_pop = []

    self.get_video_data()
    self.get_channel_data()
    self.top_comment_strip()

  def get_video_data(self):
    request = self.youtube.videos().list(
        part="snippet,contentDetails,statistics",
        id=self.video_id
    )
    video_data = request.execute()
    video_info = {}
    channel_info = {}
    video_items = video_data["items"]

    video_info.update({'videoTitle': video_items[0]['snippet']['title']})
    video_info.update({'videoId': video_items[0]['id']})
    channel_info.update({'channelId': video_items[0]['snippet']['channelId']})
    channel_info.update({'channelTitle': video_items[0]['snippet']['channelTitle']})
    video_info.update({'videoLikes': int(video_items[0]['statistics']['likeCount'])})
    video_info.update({'videoDislikes': int(video_items[0]['statistics']['dislikeCount'])})
    video_info.update({'videoViewCount': int(video_items[0]['statistics']['viewCount'])})
    video_info.update({'videoCommentCount': int(video_items[0]['statistics']['commentCount'])})
    video_info.update({'videoUploadTime': video_items[0]['snippet']['publishedAt']})

    self.video_info = video_info
    self.channel_info = channel_info

  def get_channel_data(self):
    request = self.youtube.channels().list(part="snippet,contentDetails,statistics",
                                      id= self.channel_info['channelId'],
                                      maxResults=50)
    response = request.execute()
    for item in response["items"]:
        if not item['statistics']['hiddenSubscriberCount']:
            self.channel_info.update({'subcount':int(item['statistics']['subscriberCount'])})
        else:
            self.channel_info.update({'subcount':None, "commentChannelId":item['id']})



  def top_comment_strip(self):
    nextPage_token = None
    while 1:
      request = self.youtube.commentThreads().list(
          part="snippet,replies",
          maxResults=100,
          order="time",
          pageToken= nextPage_token,
          textFormat="plainText",
          videoId= self.video_id
          )
      response = request.execute()
      nextPage_token = response.get('nextPageToken')

      for x in response["items"]:
        self.count = self.count + 1

        try:
          self.comment_id_pop.append(x['snippet']['topLevelComment']['id'])
        except Exception as e:
          self.comment_id_pop.append('00000000')

        try:
          self.comment_string_pop.append(x['snippet']['topLevelComment']['snippet']['textDisplay'])
        except Exception as e:
          self.comment_string_pop.append('00000000')

        try:
          self.comment_likes_pop.append(x['snippet']['topLevelComment']['snippet']['likeCount'])
        except Exception as e:
          self.comment_likes_pop.append(0)

        try:
          self.comment_replies_pop.append(x['snippet']['totalReplyCount'])
        except Exception as e:
          self.comment_replies_pop.append('00000000')

        self.reply_comment_pop.append(False)

        try:
          self.parent_comment_id_pop.append(x['snippet']['topLevelComment']['id'])
        except Exception as e:
          self.parent_comment_id_pop.append('00000000')

        try:
          self.parent_comment_string_pop.append(x['snippet']['topLevelComment']['snippet']['textDisplay'])
        except Exception as e:
          self.parent_comment_string_pop.append('00000000')

        try:
          self.comment_channel_id_pop.append(x['snippet']['topLevelComment']['snippet']['authorChannelId']['value'])
        except Exception as e:
          self.comment_channel_id_pop.append('00000000')

        try:
         self.comment_upload_time_pop.append(x['snippet']['topLevelComment']['snippet']['publishedAt'])
        except Exception as e:
          self.comment_upload_time_pop.append("00000000")

        try:
          self.comment_channel_name_pop.append(x['snippet']['topLevelComment']['snippet']['authorDisplayName'])
        except Exception as e:
          self.comment_channel_name_pop.append('00000000')

        if x['snippet']['totalReplyCount'] > 0:
          self.reply_strip(x['snippet']['topLevelComment']['id'], x['snippet']['topLevelComment']['snippet']['textDisplay'])

      if nextPage_token is None:
        break

    output_dict = {
      "commentId": self.comment_id_pop,
      "commentString":self.comment_string_pop,
      "commentLikes":self.comment_likes_pop,
      "commentReplies":self.comment_replies_pop,
      "commentIsA_Reply":self.reply_comment_pop,
      "parentCommentId":self.parent_comment_id_pop,
      "parentCommentString":self.parent_comment_string_pop,
      "commentChannelId":self.comment_channel_id_pop,
      "commentUploadTime":self.comment_upload_time_pop,
      "commentChannelName":self.comment_channel_name_pop,
    }

    output_df = pd.DataFrame(output_dict, columns = output_dict.keys())
    self.add_other_data(output_df)

  def reply_strip(self,comment_id, comment_string):
    nextPage_token = None
    while 1:
      request = self.youtube.comments().list(
          part="snippet",
          maxResults=100,
          parentId=comment_id,
          pageToken=nextPage_token,
          textFormat="plainText"
          )
      replyList = request.execute()
      nextPage_token = replyList.get('nextPageToken')

      for item in replyList["items"]:
        self.count = self.count + 1

        try:
            self.comment_id_pop.append(item['id'])
        except Exception as e:
            self.comment_id_pop.append('00000000')
        try:
            self.comment_string_pop.append(item['snippet']['textDisplay'])
        except Exception as e:
            self.comment_string_pop.append('00000000')
        try:
            self.comment_likes_pop.append(item['snippet']['likeCount'])
        except Exception as e:
             self.comment_likes_pop.append(0)

        self.comment_replies_pop.append(0)
        self.reply_comment_pop.append(True)

        try:
            self.parent_comment_id_pop.append(comment_id)
        except Exception as e:
            self.parent_comment_id_pop.append('00000000')
        try:
            self.parent_comment_string_pop.append(comment_string)
        except Exception as e:
            self.parent_comment_string_pop.append('00000000')
        try:
            self.comment_channel_id_pop.append(item['snippet']['authorChannelId']['value'])
        except Exception as e:
            self.comment_channel_id_pop.append('00000000')
        try:
            self.comment_upload_time_pop.append(item['snippet']['publishedAt'])
        except Exception as e:
            self.comment_upload_time_pop.append('00000000')
        try:
            self.comment_channel_name_pop.append(item['snippet']['authorDisplayName'])
        except Exception as e:
            self.comment_channel_name_pop.append('00000000')

      if nextPage_token is None:
        break

  def add_other_data(self,output_df):
    channel_id_list = output_df['commentChannelId']
    channel_id_string_list = []
    count = 0
    channel_id_string = ''

    for channel_string in channel_id_list:
        if count < 50:
            channel_id_string = channel_id_string + ',' + channel_string
            count+=1
        else:
            channel_id_string = channel_id_string[1:]
            channel_id_string_list.append(channel_id_string)
            count = 0
            channel_id_string = ''
            channel_id_string = channel_id_string + ',' + channel_string
            count+=1

    if len(channel_id_list) % 50 != 0:
        channel_id_string_list.append(channel_id_string)
        channel_id_string = channel_id_string[1:]

    dict_list = []

    for i in channel_id_string_list:
        subscriber_list = []

        request = self.youtube.channels().list(part="snippet,contentDetails,statistics",
                                          id=i,
                                          maxResults=50)
        response = request.execute()
        for item in response["items"]:
            if not item['statistics']['hiddenSubscriberCount']:
                subscriber_list.append({'channelSubCount':int(item['statistics']['subscriberCount']), "commentChannelId":item['id']})
            else:
                subscriber_list.append({'channelSubCount':None, "commentChannelId":item['id']})

        dict_list.extend(subscriber_list)

    sub_df = pd.DataFrame(data = dict_list).drop_duplicates(subset = 'commentChannelId', keep = 'last')

    merge_df = pd.merge(sub_df,output_df, on = 'commentChannelId',how='right')

    merge_df['time_difference'] = merge_df['commentUploadTime'].apply(self.date_to_seconds)

    self.raw_comments = merge_df.to_json(orient = 'records')

  def date_to_seconds(self, date):
      parsed_comment_date = dp.parse(date)
      comment_date_in_seconds = parsed_comment_date.timestamp()
      parsed_video_date = dp.parse(self.video_info['videoUploadTime'])
      video_date_in_seconds = parsed_video_date.timestamp()
      return comment_date_in_seconds - video_date_in_seconds