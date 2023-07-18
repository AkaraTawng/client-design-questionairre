import Question from "../utils/Question"
import Checkbox from "../utils/Checkbox"
import { useState, useEffect } from "react";
import styled from "styled-components";

const allContentTypes = [
  { label: "Pictures", checked: false },
  { label: "Videos", checked: false },
  { label: "Music files", checked: false },
  { label: "Blog posts", checked: false },
  { label: "Product listings", checked: false },
  { label: "Other", checked: false },
]

function ContentType() {
  const [contentTypes, setContentTypes] = useState(JSON.parse(sessionStorage.getItem('contentTypes')) ?? allContentTypes);
  const [otherTextArea, setOtherTextArea] = useState(JSON.parse(sessionStorage.getItem('user_otherContentTypes')) ?? '');

  const updateCheckStatus = index => {
    setContentTypes(
      contentTypes.map((contentType, currentIndex) =>
        currentIndex === index
          ? { ...contentType, checked: !contentType.checked }
          : contentType
      ) 
    )
  }

  useEffect(() => {
      sessionStorage.setItem('contentTypes', JSON.stringify(contentTypes))
  }, [contentTypes])

  const handleOtherTextareaChange = (e) => {
    setOtherTextArea(e.target.value);
  };
  
  useEffect(() => {
    sessionStorage.setItem('user_otherContentTypes', JSON.stringify(otherTextArea));
  }, [otherTextArea])

//  console.log(contentTypes)

  return (<>
    <Question>What kind of content do you plan to publish on your website? Select all that apply. </Question>
    
    {contentTypes.map((contentType, index) => (
        <Checkbox
          key={contentType.label}
          isChecked={contentType.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={contentType.label}
          index={index}
          name={"user_contentTypes"}
          value={contentType.label}
        />
      ))}
      {contentTypes[5].checked === true && 
    <TextareaInput
      placeholder='Please list all other content types.'
      value={otherTextArea}
      name={"user_otherContentTypes"}
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

export default ContentType