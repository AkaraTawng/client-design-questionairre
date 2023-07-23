import Question from "../utils/Question"
import Textarea from "../utils/Textarea"

function UniqueQualities() {
  return (<>
    <Question id={'unique-qualities'}>What makes your services unique?</Question>
    <Textarea placeholder={'Please explain.'} name='user_serviceQualities'></Textarea>
  </>)
}

export default UniqueQualities