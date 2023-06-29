import Question from "../utils/Question"
import Textarea from "../utils/Textarea"

function TargetDemographic() {
  return (<>
      <Question>What is your target demographic?</Question>
      <Textarea placeholder={'Please explain.'} name=''></Textarea>
    </>
  )
}

export default TargetDemographic