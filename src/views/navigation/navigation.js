import React from 'react';
import { useSelector } from 'react-redux';
import {
    Header,
    LeftOptions,
    RightOptions,
    LinkStyled
} from './navigation.styles'

const Navigation = () => {
    const { comments } = useSelector(state => state.mediaReducer);
    return (
        <Header>
            <LeftOptions>
                <LinkStyled to='/search'>
                    Query
                </LinkStyled>
                {
                    comments.length ?
                        <LinkStyled to='/display'>
                            Analyze
                        </LinkStyled>
                        :
                        <LinkStyled as="div" disabled>
                            Analyze
                        </LinkStyled>
                }
            </LeftOptions>
            <RightOptions>
                <LinkStyled to='/about'>
                    About
                </LinkStyled>
            </RightOptions>
        </Header>
    )
}

export default Navigation; 