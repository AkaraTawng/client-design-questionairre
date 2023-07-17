import Question from "../utils/Question"
import Checkbox from "../utils/Checkbox"
import { useState, useEffect } from "react";
import styled from "styled-components";

const allContentTypes = [
  { name: "Pictures", checked: false },
  { name: "Videos", checked: false },
  { name: "Music files", checked: false },
  { name: "Blog posts", checked: false },
  { name: "Product listings", checked: false },
  { name: "Other", checked: false },
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
          key={contentType.name}
          isChecked={contentType.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={contentType.name}
          index={index}
        />
      ))}
      {contentTypes[5].checked === true && 
    <TextareaInput
      placeholder='Please list all other content types.'
      value={otherTextArea}
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