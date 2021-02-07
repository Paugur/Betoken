import styled, { css } from 'styled-components';
import {
    YoutubeFilled,
    TwitterSquareFilled,
    RedditSquareFilled,
    AmazonSquareFilled
} from '@ant-design/icons'

const iconStyles = css`
    font-size: 3.5em;
    cursor: pointer;
    color: white;
`;

export const YoutubeIconStyled = styled(YoutubeFilled)`
    ${iconStyles}
    :hover{
        color:#FF0202;
    }
`;

export const TwitterIconStyled = styled(TwitterSquareFilled)`
    ${iconStyles}
    :hover{
        color:#04A2F2;
    }
`;

export const RedditIconStyled = styled(RedditSquareFilled)`
    ${iconStyles}
    :hover{
        color:#F73E17;
    }
`;

export const AmazonIconStyled = styled(AmazonSquareFilled)`
    ${iconStyles}
    :hover{
        color:#F68F00;
    }
`;