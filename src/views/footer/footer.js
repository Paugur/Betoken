import React from 'react';
import MediaSwitch from '../../components/media-switch/media-switch';
import { FooterContainer, RightOptions } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <RightOptions>
                <MediaSwitch />
            </RightOptions>
        </FooterContainer>
    )
}

export default Footer;