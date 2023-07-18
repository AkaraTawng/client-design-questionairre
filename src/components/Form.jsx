import styled from "styled-components"
import { useState, useRef } from "react";
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
import DesignPreferences from './DesignPreferences';
import FavoriteWebsites from './FavoriteWebsites';
import Submit from './Submit';
import emailjs from '@emailjs/browser';
import ConfettiExplosion from 'react-confetti-explosion';


/**  TODO
 * Add name attribute to components that use checkboxes
 * */  


function Form() {
  const [page, setPage] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const FormTitles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const form = useRef();
  const confettiProps = {
    force: 0.9,
    duration: 4000,
    particleCount: 500,
    width: 2000, 
    height: '200vh', 
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(form.current);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
      sessionStorage.clear();
  };

  const handleIncrementClick = (e) => {
    setPage((currPage) => currPage + 1)
  }

  const handleDecrementClick = (e) => {
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
    <FormWrapperOuter ref={form} onSubmit={sendEmail}>
        <ProgressBarContainer>
          <ProgressBar style={{width: `${page * 8}%`}}></ProgressBar>
        </ProgressBarContainer>
        <FormWrapperInner>
        <Body>{pageDisplay()}</Body>
        <ButtonContainer>
            { page > 0 && <PrevButton disabled={page === 0} type="button" onClick={handleDecrementClick}><i className="fa-solid fa-arrow-left-long"></i></PrevButton>}
            {page < FormTitles.length - 1 && <NextButton  disabled={page === FormTitles.length - 1} type="button" onClick={handleIncrementClick}>{page > 0 ? <p>Next</p> : <p>Let's go!</p>}<i className="fa-solid fa-arrow-right-long"></i></NextButton>}
            <SubmitBtn type="submit" onClick={() => setIsExploding(!isExploding)}><p>Submit</p><i class="fa-solid fa-paper-plane"></i></SubmitBtn>
            {isExploding && <ConfettiExplosion {...confettiProps}/>}
        </ButtonContainer>
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
    cursor: pointer;

    i {
      color: #BA3D9C;
    }
    
    @supports (background-clip: text) {
       i {
        background: linear-gradient( to right, #FDB456, #DD7A78, #BA3D9C);
        background-clip: text;
        color: transparent;
      }
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
    align-items: center;
    cursor: pointer; 

    p {
      color: #BA3D9C;
      margin-right: .5rem;
      transition: all .3s ease;
    }
     &:hover p {
      margin-right: 1rem;
     }

     i {
      color: #BA3D9C;
     }
     
     @supports (background-clip: text) {
      p {
        background: linear-gradient( to right, #FDB456, #DD7A78, #BA3D9C);
        background-clip: text;
        color: transparent;
      }
      
      i {
        background: linear-gradient( to right, #FDB456, #DD7A78, #BA3D9C);
        background-clip: text;
        color: transparent;
      }
    }
`;

const SubmitBtn = styled(NextButton)`

`;

export default Form