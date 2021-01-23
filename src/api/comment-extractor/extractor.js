import React from 'react';
import YoutubeAPI from './youtube-extractor/youtube-extractor';
import { useSelector } from 'react-redux';

const Extractor = () => {
    const { mediaPref } = useSelector(state => state.userReducer);
    switch (mediaPref) {
        case 'Youtube':
            return (
                <YoutubeAPI />
            )
        default:
            return (
                <YoutubeAPI />
            )
    }
}

export default Extractor;