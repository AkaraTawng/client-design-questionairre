import styled from "styled-components"
import Textarea from "./Textarea";
import { useState } from "react";


function Checkbox({id, name, value, children, placeholder}) {
    const [checked, setChecked] = useState(false);

    const displayOtherTextareaInput = (event) => {
      setChecked(event.target.checked)
    } 

    return ( <>
        <CheckboxContainer>
            <Input type="checkbox" id={id} name={name} value={value} onChange={displayOtherTextareaInput}/>
            <Label for={id}>
                {children}
            </Label>
        </CheckboxContainer>  
        {id === 'other' && checked &&
                    <Textarea placeholder={placeholder} name={name}></Textarea>
            }
  </>)
}


const CheckboxContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 80%;
height: 5rem;
`;

const Input = styled.input`
  margin-right: 1rem;
  height: 1.1rem;
  width: 1.1rem;
  accent-color: grey; 
`;

const Label = styled.label`
  color: white;
`;

export default Checkbox