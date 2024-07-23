import * as React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  margin-top: 0px;
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled.a`
  cursor: pointer;
`

const ImageContainer = styled.div`
  max-width: 800px;
  max-height: auto;
`

const Image = styled.img`
  width: 100%;
`

export const PromotedContent = () => {
  return (
    <StyledContainer>
      <StyledLink
        href="/promoted-content"
        aria-label="Default Promoted Content"
      >
        <ImageContainer>
          <Image src="/images/default.jpg" alt="Default promoted content" />
        </ImageContainer>
      </StyledLink>
    </StyledContainer>
  )
}
