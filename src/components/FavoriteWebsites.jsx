import Question from "../utils/Question";
import Textarea from "../utils/Textarea";

function FavoriteWebsites() {
  return (
    <>
      <Question className={"favorite-websites"}>
        What are your three favorite websites and what do you like about them?
        If you don’t have three favorite websites, find three that you like.
        Please provide links.
      </Question>
      <Textarea
        name="user_favoriteWebsites"
        id="favsites"
        placeholder="websitelink1@example.com&#10;like 1, like 2, like 3, ..."
      ></Textarea>
    </>
  );
}

export default FavoriteWebsites;
