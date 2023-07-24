import Question from '../utils/Question'
import Textarea from '../utils/Textarea'

function ServicesDescription() {
  return (<>
    <Question className={'services-description'}>What specific services does your company provide? List all that apply.</Question>
    <Textarea placeholder='Please describe your services here.' name='user_servicesDescription'></Textarea>
    </>)
}

export default ServicesDescription