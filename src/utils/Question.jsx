import styled from 'styled-components';
import {devices} from '../utils/breakpoints';

export default function Question({children, id, className}) {
  return (
    <QuestionText className={className} id={id}>{children}</QuestionText>
  )
}  

const QuestionText = styled.p`
  color: white;
  padding-bottom: .5rem;
  border-bottom: 2px solid white;
  width: 80%;
  font-size: 0.9rem;
  /* margin-top: -5rem; */

  &:not(:first-child){
    margin-top: 3rem;
  }

  &.design-preferences {
    margin-top: -4rem;
    margin-bottom: 1rem;
  }

  &.business-description {
    margin-top: 5rem;
  }

  &.services-description {
    margin-top: 5rem;
  }
  
  &.website-goals {
    margin-top: 5rem;
  }

  &.content-type {
    @media ${devices.mobileM} {
      margin-top: 5rem;
    }
  }
 
  &.website-features {

  }

  &.unique-qualities, &.target-demographic {
    margin-top: 2rem;
    width: 100%;
  }

  &.brand-personality {
    margin-top: 5rem;
  }

  &.favorite-websites {
    margin-top: 5rem;
  }

  &#submit-message {
    margin-top: -5rem;
    padding-bottom: 1rem;
  }


`;

