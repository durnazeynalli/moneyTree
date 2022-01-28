import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from '../../assets/colors/index';

function Header() {
  return (
      <StyledHeader>
          <Container>
              <Row>
                  <Logo>
                    Money<Span>Tree</Span>
                  </Logo>
                  <Navbar>
                    <StyledNavLink to="/"><Span>Home</Span></StyledNavLink>
                    <StyledNavLink to="/loan">Loan</StyledNavLink>
                    <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
                  </Navbar>
                  <CTA>
                    <Text>en</Text>
                    <Button>Connect Wallet</Button>
                  </CTA>
              </Row>
          </Container>
      </StyledHeader>
  );
}

const StyledHeader = styled.header`
    background-color: ${COLORS.background};
    padding: 0 10%;
`;

const Container = styled.div`

`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.p`
    color: ${COLORS.white};
    font-size: 24px;
    font-weight: bold;
`;

const Span = styled.span`
    color: ${COLORS.green};
`;

const Navbar = styled.div`

`;

const StyledNavLink = styled(NavLink)`
    color: ${COLORS.light_title};
    margin: 0 20px;
    font-size: 16px;
    text-decoration: none;
`;

const CTA = styled.div`
    display: flex;
`;

const Text = styled.p`
    color: ${COLORS.light_subtitle};
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    margin-right: 10px;
`;

const Button = styled.button`
    background: ${COLORS.green};
    border: 1px solid ${COLORS.green};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: ${COLORS.black_title};
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`;

export default Header;
