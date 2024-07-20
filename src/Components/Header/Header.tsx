import * as React from 'react'
import styled from 'styled-components'
import { Searchbar } from './Searchbar'

const HeaderContainer = styled.header`
  height: 60px;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
`

const LogoImage = styled.img`
  width: 160px;
  padding: 0px 20px;
`

const NavLink = styled.a`
  padding: 0px 12px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.7;

  transition: opacity 0.2s;

  &:hover,
  &:active,
  &:focus {
    opacity: 1;
  }
`

const SignInButton = styled.button`
  margin: 0px 4px;
  color: black;
  background-color: #fdb717;
  width: 110px;
  height: 35px;
  border: none;
  border-radius: 20px;
  padding: 6px 12px;

  font-size: 0.875rem;
  font-weight: 700;

  cursor: pointer;

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #ffd666;
  }
`

const CreateAccountButton = styled.button`
  margin: 0px 4px;
  background-color: transparent;
  color: white;
  height: 35px;
  border: 1px solid white;
  border-radius: 20px;
  padding: 6px 12px;

  font-size: 0.875rem;
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

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SettingsButton = styled.button`
  display: flex;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  border: none;
  background-color: white;
  opacity: 0.8;

  cursor: pointer;

  transition: outline 0.1s;

  &:hover,
  &:focus {
    outline: 12px solid #363535;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <h1>
          <a href="/" aria-label="Visit SBS On Demand homepage">
            <LogoImage src="/images/logo.png" alt="SBS On Demand" />
          </a>
        </h1>
        <nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/tv-shows">TV Shows</NavLink>
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/live">Live</NavLink>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/sport">Sport</NavLink>
        </nav>
      </NavContainer>
      <NavContainer>
        <Searchbar />
        <SignInButton aria-haspopup="dialog" aria-controls="login-modal">
          Sign In
        </SignInButton>
        <CreateAccountButton aria-haspopup="dialog" aria-controls="login-modal">
          Create Account
        </CreateAccountButton>
        <SettingsButton aria-label="Open Settings Menu">
          {/* This is unrelated to the WCAG 2.2 results, but the for purposes of this prototype I have used
        FontIcons, which require aria-hidden or assistive technologies will read out their text content
        */}
          <span className="material-symbols-outlined" aria-hidden>
            arrow_drop_down
          </span>
        </SettingsButton>
      </NavContainer>
    </HeaderContainer>
  )
}
