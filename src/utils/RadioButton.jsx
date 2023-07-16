import { useState, useEffect } from "react";
import styled from "styled-components"



function RadioButton({ isChecked, label, checkHandler, index }) {
  // const [radioState, setRadioState] = useState(JSON.parse(sessionStorage.getItem(name)));

  // useEffect(() => {
  //   sessionStorage.setItem(name, JSON.stringify(radioState));
 
  // }, [radioState]);

  // useEffect(() => {
  //   const storedValue = sessionStorage.getItem(name);
  //   setRadioState(storedValue ?? value)
  // }, []);

  // const handleChange = (e) => {
  //   const newValue = e.target.value;
  //   setRadioState(newValue)
  // }
  // console.log(value, 'value')
  // console.log(radioState, 'state')
  // console.log(value === radioState, 'comp')

  return (<>
    <SelectionContainer>
   
        {/* <Input 
        type='radio'  
        id={id} 
        value={value}  
        name={name} 
        checked={radioState === value}
        onChange={(e) => handleChange(e)}/>
        
        <Label htmlForfor={id}>
            {children}
        </Label> */}
    </SelectionContainer>
  </>)
}

const Input = styled.input`
  margin-right: 1rem;
  height: 1.1rem;
  width: 1.1rem;
  accent-color: grey;
`;

const Label = styled.label`
  color: white;
`;


const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 5rem;
`;

export default RadioButton