import axios from 'axios';
import { websitePrefix } from '../api-info'


export const youtubeExtractor = (mediaId, apiKey) => {
    return axios({
        url: websitePrefix + 'api/youtube_extractor/' + mediaId + '/' + apiKey,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
    })
}