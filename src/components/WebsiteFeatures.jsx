import styled from 'styled-components';
import Checkbox from '../utils/Checkbox'
import Question from '../utils/Question'
import { useState, useEffect } from "react";


const allFeatures = [
  {label: 'Payment Portal', checked: false},
  {label: 'Appointment Scheduling', checked: false},
  {label: 'Contact Form', checked: false},
  {label: 'Other', checked: false},
];

function WebsiteFeatures() {
  const [websiteFeatures, setWebsiteFeatures] = useState(JSON.parse(sessionStorage.getItem('websiteFeatures')) ?? allFeatures);
  const [otherTextArea, setOtherTextArea] = useState(JSON.parse(sessionStorage.getItem('user_otherWebsiteFeatures')) ?? '');

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

const handleOtherTextareaChange = (e) => {
  setOtherTextArea(e.target.value);
};

useEffect(() => {
  sessionStorage.setItem('user_otherWebsiteFeatures', JSON.stringify(otherTextArea));
}, [otherTextArea])

// console.log(websiteFeatures[3].checked)

  return (<>
    <Question>What features do you need on your website? Select all that apply.</Question>

    {websiteFeatures.map((websiteFeature, index) => (
      <Checkbox
        key={websiteFeature.label}
        isChecked={websiteFeature.checked}
        checkHandler={() => updateCheckStatus(index)}
        label={websiteFeature.label}
        index={index}
        value={websiteFeature.label}
        name={"user_websiteFeatures"}
      />
    ))}
    {websiteFeatures[3].checked === true && 
    <TextareaInput
      placeholder='Please list all other features.'
      value={otherTextArea}
      name={"user_otherWebsiteFeatures"}
      onChange={handleOtherTextareaChange}
    ></TextareaInput>}
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