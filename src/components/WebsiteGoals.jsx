import Question from '../utils/Question'
import TextareaInput from '../utils/Textarea'

function WebsiteGoals() {
  return (<>
    <Question>What goals do you want to accomplish with your new website?</Question>
    <TextareaInput placeholder='I.e.: Sell goods or services, disseminate knowledge, increase brand recognition, etc.
' name='website-goals'></TextareaInput>
    </>)
}



export default WebsiteGoals