import React from 'react';
import YoutubeAPI from './youtube-extractor/youtube-extractor';
import { useSelector } from 'react-redux';
import './extractor.css'

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