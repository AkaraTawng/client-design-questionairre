import Question from "../utils/Question"
import Checkbox from "../utils/Checkbox"

function ContentType() {
  return (<>
    <Question>What kind of content do you plan to publish on your website? Select all that apply. </Question>
    <Checkbox id='picture' name='picture' value='picture'>
      Pictures
    </Checkbox>
    <Checkbox id='video' name='video' value='video'>
      Videos
    </Checkbox>
    <Checkbox id='music files' name='music files' value='music files'>
      Music files
    </Checkbox>
    <Checkbox id='blog posts' name='blog posts' value='blog posts'>
      Blog posts
    </Checkbox>
    <Checkbox id='product listings' name='product listings' value='product listings'>
      Product listings
    </Checkbox>
    <Checkbox id='other' name='other' value='other' placeholder='Please explain.'>
      Other
    </Checkbox>
  </>)
}

export default ContentType