import styled from 'styled-components'

const Background = styled.div`
  max-width: 100%;

  min-width: 1400px;
  height: auto;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: auto;
  display: block;
  background-color: black;
`

const TextContainer = styled.div`
  position: absolute;
  left: 9%;
  top: 35%;
  max-width: 850px;
  text-align: left;
  @media screen and (max-width: 1700px) {
    top: 25%;
  }
  @media screen and (max-width: 1600px) {
    top: 20%;
  }
`

const Subtitle = styled.p`
  font-size: 24px;
  color: white;
`

const Description = styled.p`
  font-size: 1.25rem;
  color: white;
`

const Title = styled.a`
  font-size: 3.75rem;
  color: white;
  font-weight: 800;
  cursor: pointer;

  transition: color 0.2s ease-in-out 0.2s, background-size 0.5s;

  background-size: 0% 100%;

  &:hover {
    color: black;
    background-size: 100% 100%;
    background-image: linear-gradient(#fdb717, #fdb717);
    background-repeat: no-repeat;
  }
`

const PlayButton = styled.a`
  text-decoration: none;

  margin: 0px 4px;
  color: black;
  background-color: #fdb717;
  border: none;
  border-radius: 30px;
  padding: 10px 0px;
  min-width: 180px;

  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #ffd666;
  }
`

const MoreInfo = styled.a`
  text-decoration: none;
  min-width: 180px;
  margin: 0px 4px;
  background-color: transparent;
  color: white;
  height: 35px;
  border: 2px solid white;
  border-radius: 30px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  font-weight: 700;

  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover,
  &:focus,
  &:active {
    color: black;
    background-color: white;
  }
`

const ButtonContainer = styled.div`
  display: flex;
`

const HeartButton = styled.div`
  text-decoration: none;
  margin: 0px 4px;
  background-color: transparent;
  color: white;
  height: 35px;
  border: 2px solid white;
  border-radius: 30px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem;
  font-weight: 700;

  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
`

const TransitionAnimation = styled.div<{ transition: boolean }>`
  position: absolute;

  width: 100%;
  height: 680px;
  background-color: black;
  transition: opacity ease-in-out 0.5s;
  opacity: ${(props) => (props.transition ? 1 : 0)};
  pointer-events: none;
  z-index: 1;

  @media screen and (max-width: 1700px) {
    height: 600px;
  }
  @media screen and (max-width: 1600px) {
    height: 540px;
  }
  @media screen and (max-width: 1300px) {
    height: 500px;
  }
`

interface CarouselItemProps {
  url: string
  title: string
  description: string
  subtitle: string
  transition: boolean
}

export const CarouselItem = (props: CarouselItemProps) => {
  return (
    <Background aria-live="polite" aria-atomic>
      <TransitionAnimation transition={props.transition} />
      <a href={`/${props.title}`} aria-label={`Watch ${props.title}`}>
        <Image src={props.url} alt="" />
      </a>
      <TextContainer>
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <ButtonContainer>
          <PlayButton
            href={`/${props.title}`}
            aria-label={`Play ${props.title}`}
          >
            <span className="material-symbols-outlined" aria-hidden>
              play_arrow
            </span>
            <span>Play</span>
          </PlayButton>
          <MoreInfo
            href={`/${props.title}-more-info`}
            aria-label={`More info about ${props.title}`}
          >
            More info
          </MoreInfo>
          <HeartButton title="Add to favourites" aria-label="Add to favourites">
            <span className="material-symbols-outlined" aria-hidden>
              favorite
            </span>
          </HeartButton>
        </ButtonContainer>
      </TextContainer>
    </Background>
  )
}
