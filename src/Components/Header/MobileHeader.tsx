import * as React from 'react'
import styled from 'styled-components'
import { Drawer } from '@mui/material'
import { Searchbar } from './Searchbar'

const DrawerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    transition: background-color 0.5s;
    background-color: #242424;
    border-radius: 10px;
  }
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

const MobileHeaderComponent = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & h1 {
    width: auto;
  }

  @media screen and (min-width: 1270px) {
    display: none;
  }
`

const DrawerLinks = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 20px;

  border-bottom: solid 1px grey;
  width: 100%;

  & ul {
    padding: 0;
  }

  & h4 {
    color: grey;
    padding-left: 24px;
  }

  & li {
    & a {
      color: white;
      font-size: 1.25rem;
      font-weight: 500;
      opacity: 1;
      width: 100%;
      height: ;
    }

    text-align: left;
    padding: 20px 16px;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus-within {
      background-color: #242424;
    }
  }
`

const DrawerCloseButton = styled.div`
  position: relative;
  width: 100%;
  & button {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    float: right;
    margin-right: 40px;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      background-color: white;
      color: black;
    }
  }
`

const SettingsBar = styled.div`
  width: 100%;

  & h4 {
    color: grey;
    padding-left: 24px;
  }

  & ul {
    width: 100%;
    padding: 0;
  }

  & li {
    & a {
      color: white;
      text-decoration: none;
      padding: 20px 24px;
    }
    list-style-type: none;
    color: white;
    font-size: 1.25rem;
    text-align: left;
    padding: 20px 0px;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus-within {
      background-color: #242424;
    }
  }
`

const DrawerHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;

  & h4 {
    color: grey;
  }

  border-bottom: solid 1px grey;
`

const LogoContainer = styled.div`
  width: 100px;
  & img {
    width: 160px;
    padding: 0px 20px;
  }
`

export const MobileHeader = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  return (
    <>
      <MobileHeaderComponent>
        <DrawerButton aria-label="Open Menu" onClick={() => toggleDrawer(true)}>
          <span className="material-symbols-outlined">menu</span>
        </DrawerButton>
        <LogoContainer>
          <h1>
            <a href="/" aria-label="Visit SBS On Demand homepage">
              <img src="/images/logo.png" alt="SBS On Demand" />
            </a>
          </h1>
        </LogoContainer>
        <Searchbar />
      </MobileHeaderComponent>
      <Drawer
        aria-labelledby="drawer-header"
        open={open}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#0b0d0f',
            width: 300,
          },
        }}
      >
        {
          <div>
            <DrawerHeader>
              <h4 id="drawer-header">MENU</h4>
              <DrawerCloseButton>
                <button
                  aria-label="Close Menu"
                  onClick={() => toggleDrawer(false)}
                >
                  <span className="material-symbols-outlined" aria-hidden>
                    close
                  </span>
                </button>
              </DrawerCloseButton>
            </DrawerHeader>

            <DrawerLinks>
              <h4>NAVIGATION</h4>
              <ul>
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/tv-shows">TV Shows</NavLink>
                </li>
                <li>
                  <NavLink href="/movies">Movies</NavLink>
                </li>
                <li>
                  <NavLink href="/live">Live</NavLink>
                </li>
                <li>
                  <NavLink href="/news">News</NavLink>
                </li>
                <li>
                  <NavLink href="/sport">Sport</NavLink>
                </li>
              </ul>
            </DrawerLinks>
            <SettingsBar>
              <h4>SETTINGS</h4>
              <ul>
                <li>
                  <a href="/sign-in" aria-label="Sign in">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="/sign-in" aria-label="Create Account">
                    Create Account
                  </a>
                </li>
              </ul>
            </SettingsBar>
          </div>
        }
      </Drawer>
    </>
  )
}
