import styled from 'styled-components';

export default function Question({children, id}) {
  return (
    <QuestionText id={id}>{children}</QuestionText>
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

  &#submit-message {
    font-size: 1.3rem;
    padding-bottom: 1rem;
  }
`;

