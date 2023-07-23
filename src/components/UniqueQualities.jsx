import Question from "../utils/Question"
import Textarea from "../utils/Textarea"

function UniqueQualities() {
  return (<>
    <Question className={'unique-qualities'}>What makes your services unique?</Question>
    <Textarea placeholder={'Please explain.'} name='user_serviceQualities' className='unique-qualities'></Textarea>
  </>)
}

export default UniqueQualities