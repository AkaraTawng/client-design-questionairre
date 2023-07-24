import Question from '../utils/Question'
import TextareaInput from '../utils/Textarea'

function WebsiteGoals() {
  return (<>
    <Question className={'website-goals'}>What goals do you want to accomplish with your new website?</Question>
    <TextareaInput placeholder='i.e.; Sell goods or services, disseminate knowledge, increase brand recognition, etc.
' name='user_websiteGoals'></TextareaInput>
    </>)
}



export default WebsiteGoals