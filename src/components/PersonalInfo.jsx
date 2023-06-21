import React from 'react'
import styled from 'styled-components'

function PersonalInfo() {
  return (
    <PersonalInfoContainer>
      <InputContainer>
        <NameInput type='text' placeholder=''/>
        <Label>First and Last Name</Label>
      </InputContainer>
      <EmailInput type='email' placeholder='Email'/>
      <CompanyNameInput  type='text' placeholder='Company Name'/>
      <CompanyIndustryInput  type='text' placeholder='Company Industry'/>
    </PersonalInfoContainer>
  )
}

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15vh;
  
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Label = styled.span`
  position: absolute;
  left: 0;
  padding-left: .2rem;
  font-size: 1rem;
  color: #6d6d6d;
  color: #e6e5e5;
  pointer-events: none;
  transition: 0.6s;
`;

const NameInput = styled.input`
  width: 100%;
  padding: .6rem 1.2rem;
  border: none;
  font-size: .9rem;
  outline-color: transparent;
  background-color: transparent;
  border-bottom: 2px solid white;
  color: white;

  &:focus {
    /* border: 3px solid #ffda37; */
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: white;
    transform: translateX(10px);
    transform: translateY(-25px);
    font-size: 0.75rem;
  }
`;

const EmailInput = styled.input`
  
`;

const CompanyNameInput = styled.input`
  
`;

const CompanyIndustryInput = styled.input`
  
`;

export default PersonalInfo