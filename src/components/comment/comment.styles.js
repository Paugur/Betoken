import styled, { css } from 'styled-components';

const positive = css`
    color: green;
`;

const negative = css`
    color: red;
`;

const neutral = css`
    color: black;
`;

const sentiment = (props) => {
    if (props.sentiment > 0.1) {
        return positive;
    } else if (props.sentiment < -0.1) {
        return negative;
    } else {
        return neutral;
    }
}

export const CommentContainer = styled.div`
    font-size: 15px;
    text-align: left;
    padding: 15px;
    ${sentiment}
`;