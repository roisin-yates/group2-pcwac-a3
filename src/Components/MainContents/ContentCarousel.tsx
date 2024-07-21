import * as React from 'react'
import { ContentCard } from './ContentCard'
import styled from 'styled-components'

const StyledContentCarousel = styled.div`
  padding: 24px;
  text-align: left;
`
const ViewAll = styled.span`
  margin-top: 3px;
  color: grey;
  opacity: 0;
  margin-left: -50px;
  transition: margin-left 0.5s, opacity 0.5s;
`

const ContentLink = styled.a`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover,
  &:focus {
    ${ViewAll} {
      margin-left: 5px;
      opacity: 1;
    }
  }
`

const SectionHeader = styled.h2`
  color: white;
  font-size: 1.25rem;
`

const ContentRibbon = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 12px;

  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

const LeftContent = styled.ul<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  overflow: hidden;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 12px;

  & li {
    list-style-type: none;
  }

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1100px) {
    display: inherit;
  }
`

const RightContent = styled.ul<{ active: boolean }>`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  overflow: hidden;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 12px;

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1100px) {
    display: inherit;
  }

  & li {
    list-style-type: none;
  }
`

const LeftButton = styled.button`
  position: absolute;
  left: 0px;
  top: 85%;
  height: 200px;
  width: 50px;
  border: none;
  background-color: transparent;
  color: white;
  opacity: 0.5;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 1700px) {
    top: 75%;
  }
  @media screen and (max-width: 1600px) {
    top: 80%;
  }

  @media screen and (max-width: 1500px) {
    top: 90%;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }

  > span {
    font-size: 2rem;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const RightButton = styled.button`
  position: absolute;
  right: 0px;
  top: 85%;
  height: 200px;
  width: 50px;
  border: none;
  background-color: transparent;
  color: white;
  opacity: 0.5;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 1700px) {
    top: 75%;
  }
  @media screen and (max-width: 1600px) {
    top: 80%;
  }

  @media screen and (max-width: 1500px) {
    top: 90%;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }

  > span {
    font-size: 2rem;
  }

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const TestCards1 = [
  {
    title: 'Content 1',
    genre: 'genre',
  },
  {
    title: 'Content 2',
    genre: 'genre',
  },
  {
    title: 'Content 3',
    genre: 'genre',
  },
  {
    title: 'Content 4',
    genre: 'genre',
  },
  {
    title: 'Content 5',
    genre: 'genre',
  },
  {
    title: 'Content 6',
    genre: 'genre',
  },
]

const TestCards2 = [
  {
    title: 'Content 7',
    genre: 'genre',
  },
  {
    title: 'Content 8',
    genre: 'genre',
  },
  {
    title: 'Content 9',
    genre: 'genre',
  },
  {
    title: 'Content 10',
    genre: 'genre',
  },
  {
    title: 'Content 11',
    genre: 'genre',
  },
  {
    title: 'Content 12',
    genre: 'genre',
  },
]

export const ContentCarousel = () => {
  const [activeSet, setActiveSet] = React.useState(0)

  return (
    <StyledContentCarousel>
      <ContentLink
        href="/genre-content-collection"
        aria-label="Genre content collection - view all"
      >
        <SectionHeader>Genre Content Collection</SectionHeader>
        <ViewAll>View all</ViewAll>
        <span className="material-symbols-outlined" aria-hidden>
          arrow_forward_ios
        </span>
      </ContentLink>
      <ContentRibbon>
        <LeftButton
          disabled={activeSet === 0}
          hidden={activeSet === 0}
          aria-hidden={activeSet === 0}
          onClick={() => {
            setActiveSet(0)
          }}
        >
          <span className="material-symbols-outlined" aria-hidden>
            arrow_back_ios
          </span>
        </LeftButton>
        <LeftContent active={activeSet === 0}>
          {TestCards1.map((testcard, i) => {
            return (
              <li>
                <ContentCard title={testcard.title} genre={testcard.genre} />
              </li>
            )
          })}
        </LeftContent>
        <RightContent active={activeSet === 1}>
          {TestCards2.map((testcard, i) => {
            return (
              <li>
                <ContentCard title={testcard.title} genre={testcard.genre} />
              </li>
            )
          })}
        </RightContent>
        <RightButton
          disabled={activeSet === 1}
          onClick={() => {
            setActiveSet(1)
          }}
          hidden={activeSet === 1}
          aria-hidden={activeSet === 1}
        >
          <span className="material-symbols-outlined" aria-hidden>
            arrow_forward_ios
          </span>
        </RightButton>
      </ContentRibbon>
    </StyledContentCarousel>
  )
}
