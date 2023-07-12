import Checkbox from '../utils/Checkbox'
import Question from '../utils/Question'


function WebsiteFeatures() {
  return (<>
    <Question>What features do you need on your website? Select all that apply.</Question>
    <Checkbox id='payment-portal' name='user_siteFeatures' value='Payment portal'>
      Payment Portal
    </Checkbox>
    <Checkbox id='appointment-scheduling' name='user_siteFeatures' value='Appointment scheduling'>
      Appointment Scheduling    
    </Checkbox>
    <Checkbox id='contact-form' name='user_siteFeatures' value='Contact form'>
      Contact Form
    </Checkbox>
    <Checkbox id='other' name='user_siteFeatures' value='other' placeholder='Please list all that apply.'>
      Other
    </Checkbox>

  </>)
}

export default WebsiteFeatures