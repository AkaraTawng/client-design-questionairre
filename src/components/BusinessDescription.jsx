import styled from 'styled-components'
import Question from '../utils/Question'
import Textarea from '../utils/Textarea'
function BusinessDescription() {
  return (<>
    <Question>Describe your business in a few sentences.</Question>
    <Textarea id='business-description' name="user_businessDescription"></Textarea>
  </>)
}

export default BusinessDescription