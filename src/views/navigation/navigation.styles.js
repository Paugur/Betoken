import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

const disabled = css`
    cursor: not-allowed;
    color: gray;
`;

const active = css`
    cursor: pointer;
    color: white; 
`;

const cursor = (props) => {
    if (props.disabled) {
        return disabled;
    } else {
        return active;
    }
}

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LeftOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const RightOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LinkStyled = styled(Link)`
    padding: 20px;
    text-decoration: none;
    ${cursor}
`;