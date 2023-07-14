import Question from "../utils/Question"
import Checkbox from "../utils/Checkbox"
import { useState } from "react";

const allToppings = [
  { name: "Golden Corn", checked: false },
  { name: "Paneer", checked: false },
  { name: "Tomato", checked: false },
  { name: "Mushroom", checked: false },
  { name: "Onion", checked: false },
  { name: "Black Olives", checked: false },
]

function ContentType() {
  const [toppings, setToppings] = useState(allToppings)

  const updateCheckStatus = index => {
    setToppings(
      toppings.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )}

    
 console.log(toppings)

  
  return (<>
    <Question>What kind of content do you plan to publish on your website? Select all that apply. </Question>
    
    {toppings.map((topping, index) => (
        <Checkbox
          key={topping.name}
          isChecked={topping.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={topping.name}
          index={index}
        />
      ))}

  </>)
}

export default ContentType