import * as React from 'react'
import styled from 'styled-components'

const AutoCompleteContainer = styled.div`
  background-color: black;
  opacity: 0.8;
  position: absolute;
  top: 50px;
  width: 300px;
  color: white;
  text-align: left;
`

const SuggestionsUnorderedList = styled.ul`
  width: 100%;
  padding-left: 0px;
`

const SuggestionsHeader = styled.p`
  font-size: 14px;
  color: grey;
  padding: 8px 16px;
`

const SuggestionsList = styled.li`
  list-style-type: none;
  padding: 12px 0px;
  width: 100%;

  &:hover {
    background-color: grey;
  }
`

const SuggestionsLink = styled.a`
  text-decoration: none;
  color: white;
  padding-left: 12px;
  font-size: 14px;
`

export const AutoComplete = () => {
  return (
    <AutoCompleteContainer id="autocompleter">
      <SuggestionsHeader>Suggestions:</SuggestionsHeader>
      <SuggestionsUnorderedList>
        <SuggestionsList>
          <SuggestionsLink href="/">Suggestion1</SuggestionsLink>
        </SuggestionsList>
        <SuggestionsList>
          <SuggestionsLink href="/">Suggestion2</SuggestionsLink>
        </SuggestionsList>
        <SuggestionsList>
          <SuggestionsLink href="/">Suggestion3</SuggestionsLink>
        </SuggestionsList>
        <SuggestionsList>
          <SuggestionsLink href="/">Suggestion4</SuggestionsLink>
        </SuggestionsList>
        <SuggestionsList>
          <SuggestionsLink href="/">Suggestion5</SuggestionsLink>
        </SuggestionsList>
      </SuggestionsUnorderedList>
    </AutoCompleteContainer>
  )
}
