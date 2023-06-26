import Question from '../utils/Question'
import Textarea from '../utils/Textarea'

function ServicesDescription() {
  return (<>
    <Question>What specific services does your company provide? List all that apply.</Question>
    <Textarea placeholder='I.e.: Sell goods or services, disseminate knowledge, increase brand recognition, etc.
' name='services-description'></Textarea>
    </>)
}





export default ServicesDescription