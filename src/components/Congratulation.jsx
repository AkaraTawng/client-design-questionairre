import React from 'react'
import styled from 'styled-components'

function Congratulation() {
  return (<>
    <Header>Congratulations!</Header>
    <subHeader>You made it!</subHeader>
    <congratulationBodyText>
        All your answers have been saved and are on their way to our team now.
    </congratulationBodyText>
    <congratulationBodyText>
        You can safely close this tab and enjoy the rest of your day 😁
    </congratulationBodyText>

  </>)
}

const Header = styled.h1`
  color: white;
`;

const subHeader = styled.h2`
  color: white;
`;

const congratulationBodyText = styled.p`
  color: white;
`;

export default Congratulation