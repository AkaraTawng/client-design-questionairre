import Question from "../utils/Question"
import RadioButton from "../utils/RadioButton"

function DesignPrefernces() {
  return (<>
    <Question>Do you have any specific design prefernces that should be followed?</Question>
    <RadioButton id='no-design-preferences' value='no' name='user_designPreferences'>
      No.
    </RadioButton>
    <RadioButton id='yes-design-preferences' value='yes' name='user_designPreferences'>
      Yes.
    </RadioButton>

</>)
}

export default DesignPrefernces