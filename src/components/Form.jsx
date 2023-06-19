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
        <Footer>
            <PrevButton disabled={page === 0} type="button" onClick={handleDecrementClick}>Back</PrevButton>
            <NextButton  disabled={page === FormTitles.length - 1} type="button" onClick={handleIncrementClick}>Next</NextButton>
        </Footer>
        </FormWrapperInner>
    </FormWrapperOuter>
  )
}

const FormWrapperOuter  = styled.form`
    background: linear-gradient(#FDB456, #DD7A78, #BA3D9C);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

const FormWrapperInner = styled.div`

`;


const Body = styled.main`
    
`;

const Footer = styled.footer`
    
`;

const PrevButton = styled.button`
    
`;

const NextButton = styled.button`
    
`;


export default Form