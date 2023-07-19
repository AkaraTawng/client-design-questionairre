import React from 'react'
import Question from '../utils/Question'
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
import styled from 'styled-components';


function Submit() {
  return (<>
    <Question id='submit-message'>Please take some time to review your answers and click submit when you're ready.</Question>

    <InvisibilityShield>
      <PersonalInfo/>
      <BackgroundInfo/>
      <BusinessDescription/>
      <ServicesDescription/>
      <WebsiteGoals/>
      <ContentType/>
      <WebsiteFeatures/>
      <UniqueQualities/>
      <TargetDemographic/>
      <BrandPersonality/>
      <DesignPreferences/>
      <FavoriteWebsites/>
    </InvisibilityShield>
    </>)
}

const InvisibilityShield = styled.div`
  display: none;
`

export default Submit 