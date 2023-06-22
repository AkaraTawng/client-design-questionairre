import React from 'react'
import styled from 'styled-components'
import QuestionText from '../utils/Question';

function BackgroundInfo() {
  return (<>
    <QuestionText>Do you have content ready for your site?</QuestionText>
    <SelectionContainer>
      <Input type='radio' id='yes' value='yes' name='background-info-content'/>
      <Label for='yes'>Yes, I have content ready.</Label>
    </SelectionContainer>
    
    <SelectionContainer>
      <Input type='radio' id='no' value='no' name='background-info-content'/>
      <Label for='no'>Not yet. I'm still working on it.</Label>
    </SelectionContainer>
  
    <QuestionText>Is your company legally registered?</QuestionText>
    <SelectionContainer>
      <Input type='radio' id='yes' value='yes' name='background-info-legally-registered'/>
      <Label for='yes'>Yes.</Label>
    </SelectionContainer>
    
    <SelectionContainer>
      <Input type='radio' id='no' value='no' name='background-info-legally-registered'/>
      <Label for='no'>No.</Label>
    </SelectionContainer>
   
    <SelectionContainer>
      <Input type='radio' id='no' value='in the process' name='background-info-legally-registered'/>
      <Label for='no'>I'm in the process of registering it.</Label>
    </SelectionContainer>
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