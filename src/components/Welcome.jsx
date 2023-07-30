import React from 'react'
import styled from 'styled-components'
import { devices } from '../utils/breakpoints';

function Welcome() {
  return (<>
    <HeaderMessage>Welcome</HeaderMessage>
    <BodyText>
      This questionnaire is used to help us understand your business goals and needs and guide us to create the best solution for you. 
    </BodyText>
    
    <BodyText>
      Please be as specific as possible in your answers as it will give us the most insight and enable us to help you best. 
    </BodyText>
    
    <BodyText>
      Use the back arrow in the top left corner at any time to navigate to a previous page to amend your answers.
    </BodyText>

  </>)
}

// font-family: 'Krona One', sans-serif;
// font-family: 'Montserrat', sans-serif;

const HeaderMessage = styled.h1`
  color: #BA3D9C;
  text-transform: uppercase;
  font-family: 'Krona One', sans-serif;
  font-size: 6rem;
  letter-spacing: .5rem;
  margin-top: -13vw;
  margin-bottom: 5rem;
  @media ${devices.mobileM} {
    margin-top: 0;
  }
  
  @media ${devices.mobileL} {
    font-size: 5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  @media ${devices.tablet} {
    font-size: 4rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const BodyText = styled.p`
  color: white;
  text-align: center;
  width: 80%;
  line-height: 5rem;
  font-size: 2.5rem;
  margin-bottom: 6rem;
    @media ${devices.mobileM} {
      font-size: 2.3rem;
      margin-bottom: 2rem;
    }
    
    @media ${devices.mobileL} {
      font-size: 2rem;
      margin-bottom: .5rem;
    }

    @media ${devices.tablet} {
      font-size: 1.5rem;
      line-height:3.5rem;
      margin-bottom: 2rem;
    }

  &:nth-of-type(3) {
    margin-bottom: 4rem;

    @media ${devices.mobileL} {
      margin-bottom: 0rem;
    }
    
    @media ${devices.tablet} {
      margin-bottom: 1rem;
    }
  }
`;
 
export default Welcome


//make color variables
//import fonts