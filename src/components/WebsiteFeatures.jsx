import Checkbox from '../utils/Checkbox'
import Question from '../utils/Question'


function WebsiteFeatures() {
  return (<>
    <Question>What features do you need on your website? Select all that apply.</Question>
    <Checkbox id='payment-portal' name='payment-portal' value='payment-portal'>
      Payment Portal
    </Checkbox>
    <Checkbox id='appointment-scheduling' name='appointment-scheduling' value='appointment-scheduling'>
      Appointment Scheduling    
    </Checkbox>
    <Checkbox id='contact-form' name='contact-form' value='contact-form'>
      Contact Form
    </Checkbox>
    <Checkbox id='other' name='other' value='other' placeholder='Please list all that apply.'>
      Other
    </Checkbox>

  </>)
}

export default WebsiteFeatures