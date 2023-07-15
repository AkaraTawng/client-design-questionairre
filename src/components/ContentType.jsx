import Question from "../utils/Question"
import Checkbox from "../utils/Checkbox"
import { useState, useEffect } from "react";

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

  </>)
}

export default ContentType