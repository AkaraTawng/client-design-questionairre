import Question from "../utils/Question"
import Textarea from "../utils/Textarea"

function TargetDemographic() {
  return (<>
      <Question className={'target-demographic'}>What is your target demographic?</Question>
      <Textarea className={'target-demographic'} placeholder={'Please explain.'} name='user_targetDemographic'></Textarea>
    </>
  )
}

export default TargetDemographic