import React from 'react'
import styled from 'styled-components'
import QuestionText from '../utils/Question';
import RadioButton from '../utils/RadioButton';

function BackgroundInfo() {
  return (<>
    <QuestionText>Do you have content ready for your site?</QuestionText>

    <RadioButton id='yes-content' value='yes-content' name='background-info-content'>
      Yes, I have content ready.
    </RadioButton>
  
    <RadioButton id='no-content' value='no-content' name='background-info-content'>
      Not yet. I'm still working on it.
    </RadioButton>
  
    <QuestionText>Is your company legally registered?</QuestionText>

    <RadioButton id='yes-registered' value='yes-registered' name='background-info-legally-registered' >
      Yes.
    </RadioButton>
     
    <RadioButton id='no-registered' value='no-registered' name='background-info-legally-registered'>
      No.
    </RadioButton>
   
    <RadioButton id='not-yet' value='not-yet' name='background-info-legally-registered'>
      I'm in the process of registering it.
    </RadioButton>
    </>
  )
}

const Input = styled.input`
  margin-right: 1rem;
  height: 1.1rem;
  width: 1.1rem;
  accent-color: grey;
`;

const Label = styled.label`
  color: white;
`;



const SelectionContainer = styled.div`
  display: flex;
  /* background-color: lightblue; */
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 5rem;
`;

export default BackgroundInfo