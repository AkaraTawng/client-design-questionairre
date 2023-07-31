import React from 'react'
import styled from 'styled-components'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Copyright>
        Christopher Chamberlain &copy; {currentYear} 
      </Copyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0;
  margin-bottom: 0;
  height: 2rem;
`;

const Copyright = styled.p`
  font-size: .7rem;
`;

export default Footer