import * as React from 'react'
import { CarouselItem } from './CarouselItem'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  width: 100%;
`

const PreviousButton = styled.button`
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 45%;
  width: 60px;
  height: 60px;
  background-color: white;
  opacity: 0.7;
  border: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #636363;

  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const NextButton = styled.button`
  z-index: 1;
  position: absolute;
  right: 0px;
  top: 45%;

  width: 60px;
  height: 60px;
  background-color: white;
  opacity: 0.7;
  border: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: #636363;

  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const ActiveButton = styled.button<{ active: boolean }>`
  height: 5px;
  width: 30px;
  margin: 0px 4px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? '#ffd666' : 'grey')};
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`

const ActiveButtonContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 65%;
  left: 9%;

  @media screen and (max-width: 1700px) {
    top: 55%;
  }
  @media screen and (max-width: 1600px) {
    top: 50%;
  }
  @media screen and (max-width: 1600px) {
    top: 500px;
  }
`

const PauseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60%;
  right: 10%;
  position: absolute;
  background-color: white;
  border: none;
  border-radius: 100%;
  opacity: 0.7;
  cursor: pointer;
  color: #636363;
  z-index: 1;

  height: 40px;
  width: 40px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }

  @media screen and (max-width: 1700px) {
    top: 55%;
  }
  @media screen and (max-width: 1600px) {
    top: 50%;
  }
`

export const Carousel = () => {
  const [activeItem, setActiveItem] = React.useState(0)
  const [shouldAutoUpdate, setShouldAutoUpdate] = React.useState(true)

  const [transition, setTransition] = React.useState(false)

  const CarouselItems = [
    {
      id: 'CarouselItem1',
      title: 'Movie Title 1',
      description: 'Movie Description 1',
      subtitle: 'Movie Subtitle 1',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem2',
      title: 'Movie Title 2',
      description: 'Movie Description 2',
      subtitle: 'Movie Subtitle 2',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem3',
      title: 'Movie Title 3',
      description: 'Movie Description 3',
      subtitle: 'Movie Subtitle 3',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem4',
      title: 'Movie Title 4',
      description: 'Movie Description 4',
      subtitle: 'Movie Subtitle 4',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem1',
      title: 'Movie Title 5',
      description: 'Movie Description 5',
      subtitle: 'Movie Subtitle 5',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem6',
      title: 'Movie Title 6',
      description: 'Movie Description 6',
      subtitle: 'Movie Subtitle 6',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem7',
      title: 'Movie Title 7',
      description: 'Movie Description 7',
      subtitle: 'Movie Subtitle 7',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem8',
      title: 'Movie Title 8',
      description: 'Movie Description 8',
      subtitle: 'Movie Subtitle 8',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem9',
      title: 'Movie Title 9',
      description: 'Movie Description 9',
      subtitle: 'Movie Subtitle 9',
      url: 'images/default.jpg',
    },
    {
      id: 'CarouselItem1',
      title: 'Movie Title 10',
      description: 'Movie Description 10',
      subtitle: 'Movie Subtitle 10',
      url: 'images/default.jpg',
    },
  ]

  const setPreviousItem = () => {
    setTransition(true)

    setTimeout(() => {
      const newIndex =
        activeItem === 0 ? CarouselItems.length - 1 : activeItem - 1
      setActiveItem(newIndex)
      setTransition(false)
    }, 500)
  }

  const setNextItem = () => {
    setTransition(true)

    setTimeout(() => {
      const nextItem = (activeItem + 1) % CarouselItems.length
      setActiveItem(nextItem)
      setTransition(false)
    }, 500)
  }

  const setActiveItemWithTimeout = (i: number) => {
    setTransition(true)

    setTimeout(() => {
      setActiveItem(i)
      setTransition(false)
    }, 500)
  }

  React.useEffect(() => {
    if (shouldAutoUpdate) {
      const timeout = setTimeout(() => {
        setTransition(true)
        setTimeout(() => {
          const nextItem = (activeItem + 1) % CarouselItems.length
          setActiveItem(nextItem)
          setTransition(false)
        }, 500)
      }, 10000)
      return () => clearTimeout(timeout)
    }
  }, [activeItem, CarouselItems.length, shouldAutoUpdate])

  return (
    <CarouselContainer>
      <CarouselItem
        title={CarouselItems[activeItem].title}
        description={CarouselItems[activeItem].description}
        subtitle={CarouselItems[activeItem].subtitle}
        url={CarouselItems[activeItem].url}
        transition={transition}
      />
      <PreviousButton aria-label="Previus" onClick={() => setPreviousItem()}>
        <span className="material-symbols-outlined" aria-hidden>
          arrow_back_ios
        </span>
      </PreviousButton>
      <NextButton aria-label="Next" onClick={() => setNextItem()}>
        <span className="material-symbols-outlined" aria-hidden>
          arrow_forward_ios
        </span>
      </NextButton>
      <PauseButton
        aria-label={`${
          shouldAutoUpdate ? 'Pause' : 'Play'
        } Suggestions Carousel`}
        onClick={() => setShouldAutoUpdate(!shouldAutoUpdate)}
      >
        {shouldAutoUpdate ? (
          <span className="material-symbols-outlined" aria-hidden>
            pause
          </span>
        ) : (
          <span className="material-symbols-outlined" aria-hidden>
            play_arrow
          </span>
        )}
      </PauseButton>
      <ActiveButtonContainer>
        {CarouselItems.map((item, i) => {
          return (
            <ActiveButton
              aria-hidden
              active={activeItem >= i}
              onClick={() => setActiveItemWithTimeout(i)}
              tabIndex={-1}
            />
          )
        })}
      </ActiveButtonContainer>
    </CarouselContainer>
  )
}
