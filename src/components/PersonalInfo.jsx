import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

function PersonalInfo() {
const [values, setValues] = useState({
  firstAndLastName: '',
  email: '',
  companyName: '', 
  companyIndustry: ''
});
console.log(values)
const getHandler = (name) => {
  return (event) => {
    setValues({...values, [name]: event.target.value})
  }
}
  return (
    <PersonalInfoContainer>
      <InputContainer>
        <Input name="user_name" type='text' value={values.firstAndLastName} onChange={getHandler('firstAndLastName')} placeholder=''/>
        <Label>First and Last Name</Label>
      </InputContainer>
      <InputContainer>
        <Input  name='user_email' type='email' value={values.email} onChange={getHandler('email')} placeholder=''/>
        <Label>Email</Label>
      </InputContainer>
      <InputContainer>
        <Input name='user_companyName' type='text' value={values.companyName} onChange={getHandler('companyName')} placeholder=''/>
        <Label>Company Name</Label>
      </InputContainer>
      <InputContainer>
        <Input name='user_companyIndustry' type='text' value={values.companyIndustry} onChange={getHandler('companyIndustry')} placeholder=''/>
        <Label>Company Industry</Label>
      </InputContainer>
    </PersonalInfoContainer>
  )
}

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 19vh;
  
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
  color: #e6e5e5;
  pointer-events: none;
  transition: 0.6s;
`;

const Input = styled.input`
  width: 100%;
  padding: .6rem 1.2rem;
  border: none;
  font-size: .9rem;
  outline-color: transparent;
  background-color: transparent;
  border-bottom: 2px solid #e6e5e5;
  color: white;

  &:focus {
    border-bottom: 2px solid #fff;
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    color: white;
    transform: translateX(10px);
    transform: translateY(-25px);
    font-size: 0.75rem;
  }
`;

export default PersonalInfo