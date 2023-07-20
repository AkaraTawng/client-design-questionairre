import styled from "styled-components"
import Textarea from "./Textarea";


function Checkbox({ isChecked, label, checkHandler, index, name, value }) {
    return ( <>
        <CheckboxContainer>
        <Input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
        name={name}
        value={value}
      />
      <Label htmlFor={`checkbox-${index}`}>{label}</Label>
        </CheckboxContainer>   
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