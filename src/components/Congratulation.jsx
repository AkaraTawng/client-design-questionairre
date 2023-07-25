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
         Our team will review your answers and you can expect to hear from us via email within the next few days.
    </CongratulationBodyText>
    <CongratulationBodyText>
        You can safely close this tab and enjoy the rest of your day 😁
    </CongratulationBodyText>
  </>)
}

const Header = styled.h1`
  color: white;
  font-size: 5rem;
  padding-bottom: .5rem;
  border-bottom: 3px solid white;
  margin-top: -13rem;
`;

const SubHeader = styled.h2`
  color: white;
  font-size: 4.5rem;
`;

const CongratulationBodyText = styled.p`
  color: white;
  text-align: center;
  width: 83%;
  line-height: 5rem;
  font-size: 2.5rem;
`;

export default Congratulation