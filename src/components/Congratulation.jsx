import React, { useEffect } from 'react'
import styled from 'styled-components'

function Congratulation() {
  return (<>
    <Header>Congratulations</Header>
    <SubHeader>You made it!</SubHeader>
    <CongratulationBodyText>
        All your answers have been saved and are on their way to our team now.
    </CongratulationBodyText>
    <CongratulationBodyText>
        You can safely close this tab and enjoy the rest of your day 😁
    </CongratulationBodyText>
  </>)
}

const Header = styled.h1`
  color: white;
  font-size: 2rem;
  padding-bottom: .5rem;
  border-bottom: 3px solid white;
`;

const SubHeader = styled.h2`
  color: white;
  font-size: 2rem;
`;

const CongratulationBodyText = styled.p`
  color: white;
  text-align: center;
  width: 83%;
  line-height: 1.5rem;
`;

export default Congratulation