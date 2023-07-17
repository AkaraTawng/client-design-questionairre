import styled from 'styled-components';
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
  const [websiteFeatures, setWebsiteFeatures] = useState(JSON.parse(sessionStorage.getItem('websiteFeatures')) ?? allFeatures);

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

// console.log(websiteFeatures[3].checked)

  return (<>
    <Question>What features do you need on your website? Select all that apply.</Question>

    {websiteFeatures.map((websiteFeature, index) => (
      <Checkbox
        key={websiteFeature.name}
        isChecked={websiteFeature.checked}
        checkHandler={() => updateCheckStatus(index)}
        label={websiteFeature.name}
        index={index}
      />
    ))}
    {websiteFeatures[3].checked === true && <TextareaInput></TextareaInput>}
  </>)
}


const TextareaInput = styled.textarea`
width: 70%;
height: 8rem;
padding: 1rem;
border-radius: 20px;
border: none;
margin-top: 1.5rem;
&:focus {
  border: 2px solid gray;
}
`

export default WebsiteFeatures