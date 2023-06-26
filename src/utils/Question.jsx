import styled from 'styled-components';

export default function Question({children}) {
  return (
    <QuestionText>{children}</QuestionText>
  )
}  

const QuestionText = styled.p`
  color: white;
  padding-bottom: .5rem;
  border-bottom: 1px solid white;
  width: 80%;

  &:not(:first-child){
    margin-top: 7rem;
  }

`;

