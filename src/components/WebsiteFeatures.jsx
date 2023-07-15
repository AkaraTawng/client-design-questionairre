import Checkbox from '../utils/Checkbox'
import Question from '../utils/Question'
import { useState, useEffect } from "react";

const allFeatures = [
  {name: 'Payment Portal', checked: false},
  {name: 'Appointment Scheduling', checked: false},
  {name: 'Contact Form', checked: false},
  {name: 'Other', checked: false},
];

function WebsiteFeatures() {
  const [websiteFeatures, setWebsiteFeatures] = useState(JSON.parse(sessionsStorage.getItem('websiteFeatures')) ?? allFeatures);

  const updateCheckStatus = index => {
    setWebsiteFeatures(
      websiteFeatures.map((websiteFeature, currentIndex) =>
        currentIndex === index
          ? { ...websiteFeature, checked: !websiteFeature.checked }
          : websiteFeature
      ) 
    )
  };

  useEffect(() => {
    sessionStorage.setItem('websiteFeatures', JSON.stringify(websiteFeatures))
}, [websiteFeatures])


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