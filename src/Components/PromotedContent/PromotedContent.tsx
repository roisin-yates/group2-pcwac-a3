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

const PromotedHeader = styled.h3`
  visibility: hidden;
  margin-top: 0px;
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
      <PromotedHeader id="promoted-content-label">
        Promoted Content
      </PromotedHeader>
      <StyledLink href="/promoted-content">
        <ImageContainer aria-labelledby="promoted-content-label">
          <Image src="/images/default.jpg" alt="" />
        </ImageContainer>
      </StyledLink>
    </StyledContainer>
  )
}
