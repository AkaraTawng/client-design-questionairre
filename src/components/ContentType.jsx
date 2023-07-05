import Question from "../utils/Question"
import Checkbox from "../utils/Checkbox"

function ContentType() {
  return (<>
    <Question>What kind of content do you plan to publish on your website? Select all that apply. </Question>
    <Checkbox id='picture' name='user_contentType' value='picture'>
      Pictures
    </Checkbox>
    <Checkbox id='video' name='user_contentType' value='video'>
      Videos
    </Checkbox>
    <Checkbox id='music-files' name='user_contentType' value='music files'>
      Music files
    </Checkbox>
    <Checkbox id='blog-posts' name='user_contentType' value='blog posts'>
      Blog posts
    </Checkbox>
    <Checkbox id='product-listings' name='user_contentType' value='product listings'>
      Product listings
    </Checkbox>
    <Checkbox id='other' name='user_contentType' value='other' placeholder='Please explain.'>
      Other
    </Checkbox>
  </>)
}

export default ContentType