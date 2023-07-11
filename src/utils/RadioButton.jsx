import styled from "styled-components"
import { useRef } from "react";


function RadioButton({id, value, name, children}) {
  // const [radioState, setRadioState] = useState('');
  const [radioState, setRadioState] = useState(localStorage.getItem(name) ?? '');
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(radioState));
    if (inputRef.current) {
      inputRef.current.checked = radioState === value;
    }
  }, [radioState]);

  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    setRadioState(storedValue ?? value)
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setRadioState(newValue)
  }
 

console.log(inputRef)

  return (<>
    <SelectionContainer>
        <Input 
        ref={inputRef}
        type='radio'  id={id} 
        value={value}  name={name} 
        onChange={(e) => handleChange(e)}/>
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