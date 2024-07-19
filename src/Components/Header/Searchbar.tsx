import * as React from 'react'
import styled from 'styled-components'
import { AutoComplete } from './AutoComplete'

const SearchbarContainer = styled.div`
  margin: 0px 4px;
  border: 1px solid white;
  border-radius: 5px;
  padding 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SearchbarInput = styled.input`
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  font-size: 16px;

  &:focus,
  &:hover,
  &:active {
    outline: none;
    background-color: white;
    border: 1px solid white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    &::placeholder {
      color: dark-grey;
    }
  }

  &::placeholder {
    color: white;
    opacity: 0.8;
  }
`

const IconContainer = styled.button`
  height: 100%;
  display: flex;
  align-content: center;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }
`

export const Searchbar = () => {
  const [expanded, setExpanded] = React.useState(false)
  const [value, setValue] = React.useState('')

  const toggleRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('focusin', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.addEventListener('focusin', handleClickOutside)
    }
  }, [])

  return (
    <div ref={toggleRef}>
      <SearchbarContainer>
        <SearchbarInput
          onClick={() => setExpanded(true)}
          onFocus={() => setExpanded(true)}
          aria-expanded={expanded}
          aria-controls="autocompleter"
          onChange={(event) => setValue(event.target.value)}
          type="text"
          placeholder="Search 15,000+ hours of videos"
          aria-autocomplete="list"
          autoCapitalize="false"
          spellCheck="false"
          aria-label="Search query"
          value={value}
        />
        <IconContainer disabled={!value} aria-label="Search">
          {/* This is unrelated to the WCAG 2.2 results, but the for purposes of this prototype I have used
        FontIcons, which require aria-hidden or assistive technologies will read out their text content
        */}
          <span className="material-symbols-outlined" aria-hidden>
            search
          </span>
        </IconContainer>
      </SearchbarContainer>
      {expanded && <AutoComplete />}
    </div>
  )
}
