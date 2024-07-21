import * as React from 'react'
import styled from 'styled-components'

import { Autocomplete, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SearchbarContainer = styled.div`
  margin: 0px 4px;
  border: 1px solid white;
  border-radius: 5px;
  padding 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  const [value, setValue] = React.useState('')

  const navigate = useNavigate()

  const options = [
    {
      label: 'Suggestion1',
      id: 'Suggestion1',
    },
    {
      label: 'Suggestion2',
      id: 'Suggestion2',
    },
    {
      label: 'Suggestion3',
      id: 'Suggestion3',
    },
    {
      label: 'Suggestion4',
      id: 'Suggestion4',
    },
    {
      label: 'Suggestion5',
      id: 'Suggestion5',
    },
  ]

  const handleSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault()
    navigate('/search')
  }

  return (
    <form method="get" action="/search">
      <Autocomplete
        disablePortal
        disableClearable
        autoSelect
        onChange={(e, v) => {
          setValue(v.toString())
        }}
        autoComplete={false}
        sx={{
          width: 300,
        }}
        freeSolo
        renderInput={(params) => (
          <SearchbarContainer>
            <TextField
              {...params}
              onChange={(e) => setValue(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && handleSubmit(e)}
              size="small"
              aria-label="Search"
              label="Search"
              InputLabelProps={{
                shrink: false,
              }}
              placeholder="Search 15,000+ hours of videos"
              sx={{
                '& label': {
                  color: 'white',
                  visibility: value ? 'hidden' : 'visible',
                },
                '& input': {
                  color: 'white',
                  '&:focus, &:active': {
                    color: 'black',
                    backgroundColor: 'white',
                    border: 0,
                    '& label': {
                      visibility: 'hidden',
                    },
                    '&::placeholder': {
                      color: 'black',
                    },
                  },
                },
              }}
            />
            <IconContainer
              disabled={!value}
              type="submit"
              tabIndex={-1}
              aria-label="Submit"
            >
              {/* This is unrelated to the WCAG 2.2 results, but the for purposes of this prototype I have used
        FontIcons, which require aria-hidden or assistive technologies will read out their text content
        */}
              <span className="material-symbols-outlined" aria-hidden>
                search
              </span>
            </IconContainer>
          </SearchbarContainer>
        )}
        id="search-combobox"
        options={options}
      />

      {/* {expanded && <AutoComplete />} */}
    </form>
  )
}
