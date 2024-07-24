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

  & label {
    background-color: black;
  }

  & input {
    z-index: 2
  }

  &:focus-within {
    & label {
      color: white
    }
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

const Form = styled.form``

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
        aria-label="Search Content"
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
              label="Search"
              placeholder="Search 15,000+ hours of videos"
              sx={{
                '& label': {
                  color: 'white',
                },
                '& input': {
                  color: 'white',
                  '&:focus, &:active': {
                    color: 'black',
                    backgroundColor: 'white',
                    '& label': {
                      visibility: 'hidden',
                      color: 'white',
                      backgroundColor: 'black',
                    },
                    '&::placeholder': {
                      color: 'black',
                    },
                  },
                },
              }}
            />
            <IconContainer disabled={!value} type="submit" aria-label="Submit">
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
