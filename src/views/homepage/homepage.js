import React from 'react'
import {
    BoldSpan,
    LogoContainer,
    HomePageContainer
} from './homepage.styles'

const HomePage = () => {
    return (
        <HomePageContainer>
            <LogoContainer isMainFocus />
            <BoldSpan>
                AI Based Comment Analyzation Tool
            </BoldSpan>
        </HomePageContainer>
    )
}

export default HomePage;