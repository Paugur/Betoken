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

export const PopUpContainer = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const PopUpContent = styled.div`
    background-color: black;
    position: absolute;
    top: 20%;
    left: 29%;
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid black;
`;

export const ClosePopUp = styled.span`
    float: right;
    :hover{
        color: red;
        cursor: pointer;
    }
`;