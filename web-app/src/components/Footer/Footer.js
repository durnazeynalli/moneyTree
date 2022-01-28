import React from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/colors';
import IMAGES from '../../assets/images';

function Footer() {
  return (
    <StyledFooter>
      <Row>
        <Frame>
          <Logo>Money<Span>Tree</Span></Logo>
          <SocialLinks>
            <StyledList>
              <ListImg src={IMAGES.instagram} alt="socials" />
              <ListImg src={IMAGES.facebook} alt="socials" />
              <ListImg src={IMAGES.twitter} alt="socials" />
              <ListImg src={IMAGES.youtube} alt="socials" />
            </StyledList>
          </SocialLinks>
          <Copy>2021 MoneyTree. All rights reserved</Copy>
        </Frame>
        <LinkFrame>
          <LinkTitle>About Us</LinkTitle>
          <LinkLists>
            <LinkList>About</LinkList>
            <LinkList>Careers</LinkList>
            <LinkList>Blog</LinkList>
            <LinkList>Legal & privacy</LinkList>
          </LinkLists>
        </LinkFrame>
        <LinkFrame>
          <LinkTitle>Services</LinkTitle>
          <LinkLists>
            <LinkList>Applications</LinkList>
            <LinkList>Buy Crypto</LinkList>
            <LinkList>Affilliate</LinkList>
            <LinkList>Institutional Services</LinkList>
          </LinkLists>
        </LinkFrame>
        <LinkFrame>
          <LinkTitle>Learn</LinkTitle>
          <LinkLists>
            <LinkList>What is Cryptocurency?</LinkList>
            <LinkList>Crypto Basics</LinkList>
            <LinkList>Tips and Tutorials</LinkList>
            <LinkList>Market Updates</LinkList>
          </LinkLists>
        </LinkFrame>
      </Row>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${COLORS.background};
  padding: 3% 7%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Frame = styled.div`
  width: 40%;
`;

const Logo = styled.h6`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${COLORS.light_title};
  margin: 0; 
`;

const Span = styled.span`
  color: ${COLORS.green};
`;

const SocialLinks = styled.ul`
  margin-left: -35px;
`;

const StyledList = styled.li`
  display: inline-block;
`;

const ListImg = styled.img`
  margin-right: 20px;
  margin-top: 30px;
`;

const Copy = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.light_subtitle};
`;

const LinkFrame = styled.div`
  width: 20%;
`;

const LinkTitle = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${COLORS.green};
  margin-left: 17px;
`;

const LinkLists = styled.ul`

`;

const LinkList = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.light_subtitle};
  display: block;
  margin-top: 8px;
  margin-left: -20px;
`;

export default Footer;
