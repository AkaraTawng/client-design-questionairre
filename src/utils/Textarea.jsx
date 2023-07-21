import styled from 'styled-components';
import { useState } from 'react';

function Textarea({placeholder, name, id}) {
  const [value, setValue] = useState(JSON.parse(sessionStorage.getItem(name)));

  const handleChange = (e) => {
    sessionStorage.setItem(name, JSON.stringify(e.target.value));
    setValue(e.target.value);
  }
  console.log(value)
  return (
    <TextareaInput value={value ?? ''} id={id} placeholder={placeholder} name={name}  onChange={handleChange}></TextareaInput>
)}


const TextareaInput = styled.textarea`
width: 80%;
height: 13rem;

&#business-description {
  margin-bottom: 5rem;
}

&#favsites {
  height: 12rem;
}
padding: 1rem;
border-radius: 20px;
border: none;
margin-top: 1.5rem;
&:focus {
  border: 2px solid gray;
}
`

export default Textarea