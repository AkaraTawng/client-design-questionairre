import styled from "styled-components"
import { useState } from "react";
import Welcome from './Welcome';
import PersonalInfo from './PersonalInfo';
import BackgroundInfo from './BackgroundInfo';
import BusinessDescription from './BusinessDescription';
import ServicesDescription from './ServicesDescription';
import WebsiteGoals from './WebsiteGoals';
import ContentType from './ContentType';
import WebsiteFeatures from './WebsiteFeatures';
import UniqueQualities from './UniqueQualities';
import TargetDemographic from './TargetDemographic'
import BrandPersonality from './BrandPersonality';
import DesignPreferences from './DesignPrefernces';
import FavoriteWebsites from './FavoriteWebsites';
import Submit from './Submit';





function Form() {

  const [page, setPage] = useState(0);
  const FormTitles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const handleIncrementClick = (e) => {
    // e.preventDefault();
    setPage((currPage) => currPage + 1)
  }

  const handleDecrementClick = (e) => {
    // e.preventDefault();
    setPage((currPage) => currPage - 1)
  }

  const pageDisplay = () => {
    switch(page) {
      case 0:
       return <Welcome/>;
       break;
      case 1:
        return <PersonalInfo/>;
        break;
      case 2:
        return <BackgroundInfo/>;
        break;
      case 3:
        return <BusinessDescription/>;
        break;
      case 4:
        return <ServicesDescription/>;
        break;
      case 5:
        return <WebsiteGoals/>;
        break;
      case 6:
        return <ContentType/>;
        break;
      case 7:
        return <WebsiteFeatures/>;
        break;
      case 8:
        return <UniqueQualities/>;
        break;
      case 9:
        return <TargetDemographic/>;
        break;
      case 10:
        return <BrandPersonality/>;
        break;
      case 11:
        return <DesignPreferences/>;
        break;
      case 12:
        return <FavoriteWebsites/>;
        break;
      case 13:
        return <Submit/>;
        break;
    }
  }
  
  return (
    <FormWrapperOuter>
        <ProgressBarContainer>
          <ProgressBar style={{width: `${page * 8}%`}}></ProgressBar>
        </ProgressBarContainer>
        <FormWrapperInner>
        <Body>{pageDisplay()}</Body>
        <ButtonContainer>
            { page > 0 && <PrevButton disabled={page === 0} type="button" onClick={handleDecrementClick}><i class="fa-solid fa-arrow-left-long"></i></PrevButton>}
            <NextButton  disabled={page === FormTitles.length - 1} type="button" onClick={handleIncrementClick}>{page > 0 ? <p>Next</p> : <p>Let's go!</p>}<i class="fa-solid fa-arrow-right-long"></i></NextButton>
        </ButtonContainer>
        </FormWrapperInner>
    </FormWrapperOuter>
    // <Footer></Footer>
  )
}

const FormWrapperOuter  = styled.form`
    background: linear-gradient(#FDB456, #DD7A78, #BA3D9C);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    /* align-items: center; */
`;

const ProgressBarContainer = styled.div`
    background-color: white;
    height: 10px;
    width: 100vw;
    position: absolute;
    top: 0;
`;
const ProgressBar = styled.div`
   height: 100%;
   background-color: lightgreen;
   transition: all .5s ease;
`;

const FormWrapperInner = styled.div`

`;



const Body = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const ButtonContainer = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
`;

const PrevButton = styled.button`
    position: absolute;
    top: 1.5rem;
    left: .8rem;
    background-color: white;
    border: none;
    border-radius: 50%;
    padding: .35rem .5rem;
    font-size: 1rem;

    i {
        background: linear-gradient( to right, #FDB456, #DD7A78, #BA3D9C);
        background-clip: text;
        color: transparent;
    }
     

 
   
    
    
  
`;

const NextButton = styled.button`
    background-color: white;
    border: none;
    padding: 0 3rem;
    border-radius: 30px;
    font-size: 1rem;
    margin-top: 3rem;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;

    p {
      color: #BA3D9C;
      margin-right: .5rem;
      transition: all .3s ease;
    }
     &:hover p {
      margin-right: 1rem;
     }

    @supports (background-clip: text) {
      p {
        background: linear-gradient( to right, #FDB456, #DD7A78, #BA3D9C);
        background-clip: text;
        color: transparent;
      }
    }

    i {
        background: linear-gradient( to right, #FDB456, #DD7A78, #BA3D9C);
        background-clip: text;
        color: transparent;
    }
`;



export default Form