import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:samuelnocita@gmail.com'>samuelnocita@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Be The Change You Want To See In The World</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/noci0001'>
          <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'>
          <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/profile.php?id=100080374506136'>
          <AiFillFacebook size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
