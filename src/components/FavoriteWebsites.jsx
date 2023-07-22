import Question from "../utils/Question"
import Textarea from "../utils/Textarea"

function FavoriteWebsites() {
  return (<>
    <Question>
    What are your three favorite websites and what do you like about them? If you don’t have three favorite websites, find three that you like. Please provide links.
    </Question>
    <Textarea name='user_favoriteWebsites' id='favsites' 
    placeholder='
      websitelink1@example.com
      like 1, like 2, like 3, ...'>
      </Textarea>

  </>)
}

export default FavoriteWebsites