import * as React from 'react'
import styled from 'styled-components'

const FavouritesButton = styled.button`
  visibility: hidden;
  cursor: pointer;
  background-color: transparent;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  justify-items: center;
  border: 2px solid white;
  opacity: 0;
  position: relative;
  bottom: 380px;
  left: 85%;
  z-index: 2;
  color: white;

  transition: color 1s, background-color 1s;

  @media screen and (max-width: 1700px) {
    bottom: 350px;
  }

  @media screen and (max-width: 1600px) {
    bottom: 330px;
    left: 80%;
  }

  @media screen and (max-width: 1500px) {
    bottom: 320px;
    left: 80%;
  }

  @media screen and (max-width: 1500px) {
    bottom: 350px;
    left: 80%;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: white;
    color: grey;
  }
`

const PlayIcon = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  z-index: 1;
  color: black;
  background-color: #fdb717;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  visibility: hidden;
  opacity: 0;

  pointer-events: none;

  bottom: 245px;
  left: 40%;

  @media screen and (max-width: 1700px) {
    bottom: 230px;
    left: 38%;
  }

  @media screen and (max-width: 1600px) {
    bottom: 220px;
    left: 35%;
  }

  @media screen and (max-width: 1500px) {
    bottom: 210px;
    left: 34%;
  }

  @media screen and (max-width: 1300px) {
    bottom: 235px;
    left: 38%;
  }

  & > span {
    font-size: 50px;
  }
`

const ContentCardContainer = styled.div`
  width: 300px;
  max-height: 300px;
  min-width: 200px;

  transition: height 0.5s, width 0.5s;

  margin: 0px 4px;

  @media screen and (max-width: 1700) {
    min-width: 250px;
  }

  &:hover,
  &:focus-within,
  &:active {
    @media screen and (min-width: 1300px) {
      width: 350px;
    }

    ${FavouritesButton} {
      transition: opacity 1s;
      opacity: 1;
      visibility: visible;
    }

    ${PlayIcon} {
      transition: opacity 1s;
      opacity: 0.6;
      visibility: visible;
    }
  }
`

const ContentTitle = styled.h3`
  color: white;
`

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`

const ContainerLink = styled.a`
  text-decoration: none;
`

const ContentGenre = styled.p`
  font-size: 1rem;
  color: grey;
`

interface ContentCardProps {
  title: string
  genre: string
}

export const ContentCard = (props: ContentCardProps) => {
  return (
    <ContentCardContainer>
      <ContainerLink href="/test" aria-label={`Watch ${props.title}`}>
        <Image src="images/default-card.jpg" alt="default card" />
        <ContentTitle>{props.title}</ContentTitle>
        <ContentGenre>{props.genre}</ContentGenre>
      </ContainerLink>
      <PlayIcon>
        <span className="material-symbols-outlined" aria-hidden>
          play_arrow
        </span>
      </PlayIcon>
      <FavouritesButton aria-label={`Add ${props.title} to favourites`}>
        <span className="material-symbols-outlined" aria-hidden>
          favorite
        </span>
      </FavouritesButton>
    </ContentCardContainer>
  )
}
