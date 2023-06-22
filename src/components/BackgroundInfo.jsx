import React from 'react'
import styled from 'styled-components'


function BackgroundInfo() {
  return (<>
    <Question>Do you have content ready for your site?</Question>
    <SelectionContainer>
      <Input type='radio' id='yes' value='yes' name='background-info'/>
      <Label for='yes'>Yes, I have content ready.</Label>
    </SelectionContainer>
    
    <SelectionContainer>
      <Input type='radio' id='no' value='no' name='background-info'/>
      <Label for='no'>Not yet. I'm still working on it.</Label>
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

const Question = styled.p`
  color: white;
  padding-bottom: .5rem;
  border-bottom: 1px solid white;
  width: 80%;
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