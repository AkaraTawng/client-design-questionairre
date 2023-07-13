import styled from "styled-components"
import Textarea from "./Textarea";
import { useState } from "react";


function Checkbox({id, name, value, children, placeholder}) {
    const [checked, setChecked] = useState(false);
    const [checkboxVal, setCheckboxVal] = useState([]);
    
   
     const displayOtherTextareaInput = (e) => {
      setChecked(e.target.checked)
    }   
    
    const handleCheck = (e) => {
      if(e.target.checked === true){
        if(checkboxVal.includes(e.target.value)){
        console.log('item already added')
        return;
    }
        let updatedCheckboxVal = [...checkboxVal, e.target.value]; 
        
        setCheckboxVal(updatedCheckboxVal)
      }
    
    // let updatedCheckboxVal = checkboxVal.concat(e.target.value);
    // if(checkboxVal.includes(e.target.value)){
    //   updatedCheckboxVal = updatedCheckboxVal.filter(item => item !== e.target.value)
    // }
    
   
  };

    const handleChange = (e) => {
      displayOtherTextareaInput(e);
      handleCheck(e);
    }
    console.log(checkboxVal)
    return ( <>
        <CheckboxContainer>
            <Input type="checkbox" id={id} name={name} value={value} onChange={e => handleChange(e)}/>
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