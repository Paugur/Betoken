import React from 'react';
import {
    Header,
    LeftOptions,
    RightOptions,
    LinkStyled
} from './navigation.styles'

const Navigation = () => {

    return (
        <Header>
            <LeftOptions>
                <LinkStyled to='/search'>
                    Query
                </LinkStyled>
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