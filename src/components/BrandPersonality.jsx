import Question from "../utils/Question"
import Textarea from "../utils/Textarea"

function BrandPersonality() {
  return (<>
    <Question>What is your brand's personality and how do you want it reflected on your website?</Question>
    <Textarea placeholder={'Please explain.'} name='user_brandPersonality'></Textarea>
  </>)
}

export default BrandPersonality