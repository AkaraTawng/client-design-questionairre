import styled from "styled-components"
import Textarea from "./Textarea";


function Checkbox({id, name, value, children, placeholder}) {
    
    
    return ( <>
        <CheckboxContainer>
            <Input type="checkbox" id={id} name={name} value={value}/>
            <Label for={id}>
                {children}
            </Label>
        </CheckboxContainer>  
        {id === 'other' && 
                <div className="other-text-input">
                    <Textarea placeholder={placeholder} name={name}></Textarea>

                </div>
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