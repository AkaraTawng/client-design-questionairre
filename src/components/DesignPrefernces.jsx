import Question from "../utils/Question"
import RadioButton from "../utils/RadioButton"

function DesignPrefernces() {
  return (<>
    <Question>Do you have any specific design prefernces that should be followed?</Question>
    <RadioButton id='no-design-preferences' value='no-design-preferences' name='design-preferences'>
      No.
    </RadioButton>
    <RadioButton id='yes-design-preferences' value='yes-design-preferences' name='design-preferences'>
      Yes.
    </RadioButton>

</>)
}

export default DesignPrefernces