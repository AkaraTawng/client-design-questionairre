import React, { useEffect } from 'react'
import styled from 'styled-components'


const handleCloseTab = () => {
    useEffect(() => {
         window.open('https://client-ui-design-questionairre.netlify.app/', '_blank', 'noreferrer');
    })
    window.close();
}



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

    <CloseTabBtn onClick={handleCloseTab}>Close Tab</CloseTabBtn>

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

const CloseTabBtn = styled.button`
    
`;

export default Congratulation