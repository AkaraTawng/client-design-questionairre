import styled from 'styled-components';

function Textarea({placeholder, name}) {
  return (
    <TextareaInput placeholder={placeholder} name={name}></TextareaInput>
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