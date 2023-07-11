import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

function PersonalInfo() {
const [firstAndLastName, setfirstAndLastName] = useState(JSON.parse(localStorage.getItem('FirstAndLastName' ?? '')));
const [email, setEmail] = useState();
const [companyName, setCompanyName] = useState();
const [companyIndustry, setCompanyIndustry] = useState();

// const [values, setValues] = useState({
//   firstAndLastName: '',
//   email: '',
//   companyName: '', 
//   companyIndustry: ''
// });
// console.log(values)
// const getHandler = (name, e) => {
//   console.log(name)
//   localStorage.setItem(name, e.target.value)
//   return (e) => {
//     setValues({...values, [name]: e.target.value})
//   }
const handleNameChange = (e) => {
  console.log(firstAndLastName)
  localStorage.setItem('FirstAndLastName', JSON.stringify(firstAndLastName))
  setfirstAndLastName(e.target.value)
}

const handleEmailChange = (e) => {
  console.log(email)
  setEmail(e.target.value)
}

const handleCompanyNameChange = (e) => {
  console.log(companyName)
  setCompanyName(e.target.value)
}

const handleCompanyIndustryChange = (e) => {
  console.log(companyIndustry)
  setCompanyIndustry(e.target.value)
}


  return (
    <PersonalInfoContainer>
      <InputContainer>
        <Input 
        name="user_name" 
        type='text' 
        value={firstAndLastName} 
        onChange={handleNameChange} 
        placeholder=''/>
        <Label>First and Last Name</Label>
      </InputContainer>
      <InputContainer>
        <Input  
        name='user_email' 
        type='email' 
        value={email} 
        onChange={handleEmailChange} 
        placeholder=''/>
        <Label>Email</Label>
      </InputContainer>
      <InputContainer>
        <Input 
        name='user_companyName' 
        type='text' 
        value={companyName} 
        onChange={handleCompanyNameChange} 
        placeholder=''/>
        <Label>Company Name</Label>
      </InputContainer>
      <InputContainer>
        <Input 
        name='user_companyIndustry' 
        type='text' 
        value={companyIndustry} 
        onChange={handleCompanyIndustryChange} 
        placeholder=''/>
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