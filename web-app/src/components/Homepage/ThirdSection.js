import React from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/colors';
import IMAGES from '../../assets/images';

function ThirdSection() {
  return (
      <Container>
          <Row>
              <StartedConteiner>
                <StartedTitle>How To Get Started</StartedTitle>
                <StartedText>Simple and easy way to get a Loan on MoneyTree.</StartedText>
                <StartedButton>Get Started</StartedButton>
              </StartedConteiner>
              <ContentContainer>
                <ItemContainer>
                    <Row>
                        <ContentImg src={IMAGES.user} alt="icon"/>
                        <TextContainer>
                            <ContentTitle>Connect  Your Wallet</ContentTitle>
                            <ContentText>Your account and cryptoassets are guaranteed safe.</ContentText>
                        </TextContainer>
                    </Row>
                </ItemContainer>
                <ItemContainer>
                    <Row>
                        <ContentImg src={IMAGES.wallet} alt="icon"/>
                        <TextContainer>
                            <ContentTitle>Get Your Loan</ContentTitle>
                            <ContentText>Provide collaterale and get your loan with zero-interest.</ContentText>
                        </TextContainer>
                    </Row>
                </ItemContainer>
                <ItemContainer>
                    <Row>
                        <ContentImg src={IMAGES.coin} alt="icon"/>
                        <TextContainer>
                            <ContentTitle>Pay Back your Loan</ContentTitle>
                            <ContentText>No due time for paying back the loans in MoneyTree.</ContentText>
                        </TextContainer>
                    </Row>
                </ItemContainer>
              </ContentContainer>
          </Row>
      </Container>
  );
}

const Container = styled.div`
    margin: 7%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StartedConteiner = styled.div`

`;

const StartedTitle = styled.h6`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: ${COLORS.light_title};
    margin: 0 0 10px;
`;

const StartedText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: ${COLORS.light_subtitle};
`;

const StartedButton = styled.button`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.btn_text};
    background-color: ${COLORS.purple};
    border: 1px solid ${COLORS.purple};
    border-radius: 10px;
    padding: 13px 24px;
    margin-top: 15px;
`;

const ContentContainer = styled.div`

`;

const ItemContainer = styled.div`
    margin-bottom: 25px;
`;

const TextContainer = styled.div`
    width: 70%;
`;

const ContentImg = styled.img`
    width: 20%;
`;

const ContentTitle = styled.h6`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: ${COLORS.light_title};
    margin: 0;
`;

const ContentText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.light_subtitle};
    margin: 0;
`;


export default ThirdSection;
