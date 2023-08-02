import React, { useEffect } from 'react'
import styled from 'styled-components'
import QuestionText from '../utils/Question';
import RadioButton from '../utils/RadioButton';
import { useState } from 'react';
import { devices } from '../utils/breakpoints';


function BackgroundInfo() {
  const [contentReady, setContentReady] = useState(JSON.parse(sessionStorage.getItem('user_contentReady')) ?? 'Yes');
  const [companyRegistered, setCompanyRegistered] = useState(JSON.parse(sessionStorage.getItem('user_companyRegistered')) ?? 'Yes');
  
  const handleContentReadyChange = (e) => {
    setContentReady(e.target.value)
  }

  useEffect(() => {
    sessionStorage.setItem('user_contentReady', JSON.stringify(contentReady));
  }, [contentReady])

  const handleCompanyRegisteredChange = (e) => {
    setCompanyRegistered(e.target.value);
  }

  useEffect(() => {
    sessionStorage.setItem('user_companyRegistered', JSON.stringify(companyRegistered));
  }, [companyRegistered])
  
    return (<>
    <BackgroundInfoContainer>
    <QuestionText className={'background-info'}>Do you have content ready for your site?</QuestionText>
    <SelectionContainer>
      <Input
        type="radio"
        name="user_contentReady"
        value="Yes"
        id="yes-content"
        checked={contentReady === "Yes"}
        onChange={handleContentReadyChange}
      />
      <Label htmlFor="yes-content">Yes</Label>
    </SelectionContainer>
    <SelectionContainer>
      <Input
        type="radio"
        name="user_contentReady"
        value="No"
        id="no-content"
        checked={contentReady === "No"}
        onChange={handleContentReadyChange}
      />
      <Label htmlFor="no-content">No</Label>
    </SelectionContainer>

    <QuestionText className={'background-info'}>Is your company legally registered?</QuestionText>
    <SelectionContainer>
      <Input
        type="radio"
        name="user_companyRegistered"
        value="Yes"
        id="yes-registered"
        checked={companyRegistered === "Yes"}
        onChange={handleCompanyRegisteredChange}
      />
      <Label htmlFor="yes-companyRegistered">Yes</Label>
    </SelectionContainer>
    <SelectionContainer>
      <Input
        type="radio"
        name="user_companyRegistered"
        value="No"
        id="no-companyRegistered"
        checked={companyRegistered === "No"}
        onChange={handleCompanyRegisteredChange}
      />
      <Label htmlFor="no-companyRegistered">No</Label>
    </SelectionContainer>
    </BackgroundInfoContainer>
  </>)
}

const Input = styled.input`
  margin-right: 1rem;
  height: 1rem;
  width: 1rem;
  accent-color: grey; 
  @media ${devices.tablet} {
    height: 1.1rem;
    width: 1.1rem;  
  }
`;

const Label = styled.label`
  color: white;
  font-size: 0.9rem;
 
`;

const BackgroundInfoContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 3rem;
  margin-bottom: .5rem;

  &:nth-of-type(4) {
    /* margin-bottom: 7rem; */
  }
`;

export default BackgroundInfo