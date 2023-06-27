import Question from '../utils/Question'
import Textarea from '../utils/Textarea'
function BusinessDescription() {
  return (<>
    <Question>Describe your business in a few sentences.</Question>
    <Textarea name="business-description"></Textarea>
  </>)
}

export default BusinessDescription