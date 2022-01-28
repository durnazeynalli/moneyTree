import React from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/colors';
import IMAGES from '../../assets/images';

function ForthSection() {
  return (
      <Container>
          <Title>Why MoneyTree when we have MakerDAO ?</Title>
          <Subtitle>A simplest & most reliable kind of money on the Avalanche network.</Subtitle>
          <Row>
              <ItemContainer>
                  <ItemImg src={IMAGES.singlecoin} alt="icon"/>
                  <ItemTitle>Stability & Low Cost</ItemTitle>
                  <ItemList>
                    <ItemText>Maintains a fixed value</ItemText>
                    <ItemText>Has no fees & penalties</ItemText>
                  </ItemList>
                  <ItemLink href="/">See Explained</ItemLink>
              </ItemContainer>
              <ItemContainer>
                  <ItemImg src={IMAGES.portfolio} alt="icon"/>
                  <ItemTitle>Reliability</ItemTitle>
                  <ItemList>
                    <ItemText>Has lower default risk</ItemText>
                    <ItemText>Requires higher collateral in high demands to secure the system</ItemText>
                  </ItemList>
                  <ItemLink href="/">See Explained</ItemLink>
              </ItemContainer>
              <ItemContainer>
                  <ItemImg src={IMAGES.security} alt="icon"/>
                  <ItemTitle>Simplicity & Security</ItemTitle>
                  <ItemList>
                    <ItemText>Has hundreds lines of code</ItemText>
                    <ItemText>Has an immutable Smart Contract</ItemText>
                  </ItemList>
                  <ItemLink href="/">See Explained</ItemLink>
              </ItemContainer>
          </Row>
      </Container>
  );
}

const Container = styled.div`
    margin: 7%;
`;

const Title = styled.h6`
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: ${COLORS.light_title};
    text-align: center;
    margin: 0;
`;

const Subtitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: ${COLORS.light_subtitle};
    text-align: center;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ItemContainer = styled.div`
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    backdrop-filter: blur(200px);
    border-radius: 18px;
    padding: 30px;
    width: 30%;
    margin: 40px 0 0;
`;

const ItemImg = styled.img`
    margin-bottom: 15px;
`;

const ItemTitle = styled.h6`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: ${COLORS.light_title};
    margin: 0;
`;

const ItemList = styled.ul`
    margin-bottom: 50px;
`;

const ItemText = styled.li`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.light_subtitle};
`;

const ItemLink = styled.a`
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.green};
    text-decoration: none;
`;

export default ForthSection;
