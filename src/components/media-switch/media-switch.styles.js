import styled, { css } from 'styled-components';
import Modal from 'react-modal';
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

export const PopUpContent = styled(Modal)`
    background-color: black;
    color: white;
    position: absolute;
    text-align: center;
    top: 20%;
    left: 29%;
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid black;
    :focus{
        outline: none;
    }
`;

export const ClosePopUp = styled.span`
    float: right;
    :hover{
        color: red;
        cursor: pointer;
    }
`;