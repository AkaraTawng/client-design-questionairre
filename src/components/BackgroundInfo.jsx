import React, { useEffect } from 'react'
import styled from 'styled-components'
import QuestionText from '../utils/Question';
import RadioButton from '../utils/RadioButton';
import { useState } from 'react';


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
    <QuestionText>Do you have content ready for your site?</QuestionText>
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

    <QuestionText>Is your company legally registered?</QuestionText>
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
     
     

    {/* <RadioButton id='yes-content' value='Yes' name='user_contentReady'>
      Yes, I have content ready.
    </RadioButton>
  
    <RadioButton id='no-content' value='No' name='user_contentReady'>
      Not yet. I'm still working on it.
    </RadioButton>
  

    <QuestionText>Is your company legally registered?</QuestionText>

    <RadioButton id='yes-registered' value='Yes' name='user_companyRegistered' >
      Yes.
    </RadioButton>
     
    <RadioButton id='no-registered' value='No' name='user_companyRegistered'>
      No.
    </RadioButton>
   
    <RadioButton id='not-yet' value='Not yet' name='user_companyRegistered'>
      I'm in the process of registering it.
    </RadioButton> */}
    </>
  )
}

const Input = styled.input`
  margin-right: 2rem;
  height: 2rem;
  width: 2rem;
  accent-color: grey;
`;

const Label = styled.label`
  color: white;
  font-size: 2.3rem;
`;

const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 5rem;
  margin-bottom: 2rem;

  &:nth-of-type(4) {
    margin-bottom: 7rem;
  }
`;

export default BackgroundInfo