import * as React from 'react'
import styled from 'styled-components'

import { ContentCarousel } from './ContentCarousel'

const StyledContentContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
`

export const ContentContainer = () => {
  return (
    <StyledContentContainer>
      <ContentCarousel />
    </StyledContentContainer>
  )
}
