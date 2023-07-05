import styled from "styled-components"


function RadioButton({id, value, name, children}) {
  return (<>
    <SelectionContainer>
        <Input type='radio'  id={id} value={value}  name={name}/>
        <Label htmlForfor={id}>
            {children}
        </Label>
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