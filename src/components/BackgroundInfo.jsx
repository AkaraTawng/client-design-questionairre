import React from 'react'
import styled from 'styled-components'


function BackgroundInfo() {
  return (<>
    <Question>Do you have content ready for your site?</Question>
    <Input type='radio' id='yes' value='yes' name='background-info'/>
    <Label for='yes'>Yes, I have content ready.</Label>
    <Input type='radio' id='no' value='no' name='background-info'/>
    <Label for='no'>Not yet. I'm still working on it.</Label>
    </>
  )
}

const Input = styled.input`
  accent-color: grey;
`;

const Label = styled.label`
  color: white;
`;

const Question = styled.p`
  color: white;

`;

export default BackgroundInfo