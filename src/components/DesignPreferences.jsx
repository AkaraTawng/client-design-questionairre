import Question from "../utils/Question"
import { useState, useEffect } from "react";
import RadioButton from "../utils/RadioButton"
import styled from "styled-components";

function DesignPreferences() {
  const [designPreferences, setDesignPreferences] = useState(JSON.parse(sessionStorage.getItem('user_designPreferences')) ?? 'Yes');

  const handleDesignPreferencesChange = (e) => {
    setDesignPreferences(e.target.value);
  }

  useEffect(() => {
    sessionStorage.setItem('user_designPreferences', JSON.stringify(designPreferences));
  }, [designPreferences]);
  
  return (<>
    <Question className={'design-preferences'}>Do you have any specific design preferences that should be followed?</Question>

    <SelectionContainer>
      <Input
        type="radio"
        name="user_designPreferences"
        value="Yes"
        id="yes-designPreferences"
        checked={designPreferences === "Yes"}
        onChange={handleDesignPreferencesChange}
      />
      <Label htmlFor="yes-designPreferences">Yes</Label>
    </SelectionContainer>
    <SelectionContainer>
      <Input
        type="radio"
        name="user_designPreferences"
        value="No"
        id="no-designPreferences"
        checked={designPreferences === "No"}
        onChange={handleDesignPreferencesChange}
      />
      <Label htmlFor="No-designPreferences">No</Label>
    </SelectionContainer>
</>)
}

const Input = styled.input`
  margin-right: 1rem;
  height: 1rem;
  width: 1rem;
  accent-color: grey;
`;

const Label = styled.label`
  color: white;
  font-size: .9rem;
`;

const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin-bottom: 2rem;
`;

export default DesignPreferences