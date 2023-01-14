import styled, { css } from "styled-components";

const positive = css`
  color: green;
`;

const negative = css`
  color: red;
`;

const neutral = css`
  color: blue;
`;

const sentiment = (props) => {
  let neu = props.sentiment.NEU ? props.sentiment.NEU : 0;
  let pos = props.sentiment.POS ? props.sentiment.POS : 0;
  let neg = props.sentiment.NEG ? props.sentiment.NEG : 0;
  if (neu < pos) {
    if (pos < neg) {
      return negative;
    } else {
      return positive;
    }
  } else {
    if (neu < neg) {
      return negative;
    } else {
      return neutral;
    }
  }
};

export const CommentContainer = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 15px;
  ${sentiment}
`;
