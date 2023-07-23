import styled from 'styled-components';

export default function Question({children, id, className}) {
  return (
    <QuestionText className={className} id={id}>{children}</QuestionText>
  )
}  

const QuestionText = styled.p`
  color: white;
  padding-bottom: 1.5rem;
  border-bottom: 4px solid white;
  width: 80%;
  font-size: 2.5rem;

  &:not(:first-child){
    margin-top: 7rem;
  }

  &.unique-qualities, &.target-demographic {
    width: 100%;
  }

  &#submit-message {
    padding-bottom: 1rem;
  }


`;

