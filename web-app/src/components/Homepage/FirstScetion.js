import React from 'react';
import styled from 'styled-components';

import IMAGES from '../../assets/images/index';
import COLORS from '../../assets/colors/index';

function FirstScetion() {
  return (
      <Container>
          <Row>
              <TextContainer>
                <TextTitle>The future of Stablecoins</TextTitle>
                <Title>Why Complicate Things When They Can Be <Span>Simple </Span>?</Title>
                <Text>MoneyTree is a decentralized bank built on Avalanche. It gives out <Span>zero-interest</Span> loans for AVAX holders.
The loans are paid out as stablecoins called <Span>USDR</Span>.</Text>
                <Button>Use USDR</Button>
              </TextContainer>
              <Image src={IMAGES.moneytree} alt="moneytree" />
          </Row>
      </Container>
  )
}

const Container = styled.div`
    padding: 30px 10%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextContainer = styled.div`
    border: 1ps solid white;
    width: 55%;
`;

const TextTitle = styled.p`
    color: ${COLORS.text_title};
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
`;

const Title = styled.p`
    color: ${COLORS.title};
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 65px;
    margin: 0;
`;

const Text = styled.p`
    color: ${COLORS.text};
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
`;

const Span = styled.span`
    color: ${COLORS.green};
`;

const Button = styled.button`
    background: ${COLORS.green};
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${COLORS.background};
    padding: 16px 24px;
`;

const Image = styled.img`

`;

export default FirstScetion;
