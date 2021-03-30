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
  const neu = props.sentiment.NEU;
  const pos = props.sentiment.POS;
  const neg = props.sentiment.NEG;
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
