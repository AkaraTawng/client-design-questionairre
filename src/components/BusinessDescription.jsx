import React from 'react'
import Question from '../utils/Question'
import styled from 'styled-components'
function BusinessDescription() {
  return (<>
    <Question>Describe your business in a few sentences.</Question>
    <label htmlFor="business-description"></label>
    <Textarea name="business-description" id="business-description"></Textarea>
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

export default BusinessDescription