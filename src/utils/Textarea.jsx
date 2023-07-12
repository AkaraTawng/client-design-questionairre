import styled from 'styled-components';
import { useState } from 'react';

function Textarea(name) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    sessionStorage.setItem(name, JSON.stringify(e.target.value));
    setValue(e.target.value);
  }
  console.log(value)
  return (
    <TextareaInput value={value} onChange={handleChange}></TextareaInput>
  )
}


const TextareaInput = styled.textarea`
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

export default Textarea