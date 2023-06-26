import React from 'react'
import Question from '../utils/Question'
import styled from 'styled-components'


function ServicesDescription() {
  return (<>
    <Question>What specific services does your company provide? List all that apply.</Question>
    <Textarea></Textarea>
    </>)
}


  const Textarea = styled.textarea`
  width: 70%;
  height: 8rem;
  padding: 1rem;
  border-radius: 20px;
  border: none;
  margin-top: 1.5rem;
  &:focus {
    border: 2px solid gray;
  }
`


export default ServicesDescription