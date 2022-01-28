import React from 'react';
import styled from 'styled-components';
import COLORS from '../assets/colors';

import FirstScetion from '../components/Homepage/FirstScetion';
import ForthSection from '../components/Homepage/ForthSection';
import SecondSection from '../components/Homepage/SecondSection';
import ThirdSection from '../components/Homepage/ThirdSection';

function Homepage() {
  return (
    <Background>
      <FirstScetion/>
      <SecondSection/>
      <ThirdSection/>
      <ForthSection/>
    </Background>
  );
}

const Background = styled.div`
  background-color: ${COLORS.background};
  padding-bottom: 10px;
`;

export default Homepage;
