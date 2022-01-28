import React from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/colors';

function SecondSection() {
  return (
      <SectionContainer>
        <Container>
            <Row>
                <TextContainer>
                    <Title>New In Cryptocurrency?</Title>
                    <Text>We'll tell you what USDR is , how it work and why you should own one right now. So let's do it.</Text>
                </TextContainer>
                <Button>Learn & Explore Now</Button>
            </Row>
        </Container>
        <FeatureContainer>
              <FeatureTitle>1 ≈ <Span>$</Span> 1</FeatureTitle>
              <FeatureText>A simple strategy for maintaining value by creating USDR  with supply equal to market demand.</FeatureText>
          </FeatureContainer>
      </SectionContainer>
  );
}

const SectionContainer = styled.div`
    margin: 55px 7%;
`;

const Container = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-sizing: border-box;
    border-radius: 12px;
    padding: 20px 60px;
    margin-bottom: 20px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 50%;
`;

const Title= styled.h6`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${COLORS.light_title};
    margin: 0;
`;

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: ${COLORS.light_subtitle};
`;

const Button = styled.button`
    border-radius: 10px;
    background-color: ${COLORS.green};
    border: 1px solid ${COLORS.green};
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.black_title};
    padding: 16px 24px;
`;

const FeatureContainer = styled.div`
    text-align: center;
    margin: 60px 0 30px;
`;

const FeatureTitle = styled.h6`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: ${COLORS.light_logo};
    margin: 0;
`;

const Span = styled.span`
    color: ${COLORS.dollor};
`

const FeatureText = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: ${COLORS.light_subtitle};
`;


export default SecondSection;
