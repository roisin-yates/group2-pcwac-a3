import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 400px;
  width: full;
  background-color: #1b2024;
  padding: 40px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LogoLink = styled.a`
  cursor: pointer;
`

const LogoImage = styled.img`
  width: 200px;
`

const PopularLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const PopularLink = styled.a`
  font-size: 1.25rem;
  color: white;
  opacity: 0.7;
  cursor: pointer;
  margin: 0px 12px;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const Buy = styled.a`
  margin: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  height: 50px;
  background-color: white;
  color: black;
  opacity: 0.6;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const SocialContainer = styled.div`
  margin-left: 60px;
  display: flex;
`

const SocialMedia = styled.a`
  margin: 0px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: white;
  color: black;
  text-decoration: none;

  opacity: 0.7;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`

const OtherLinksContainer = styled.div`
  margin-top: 60px;
  border-top: solid 1px grey;
  width: 100%;
`

const OtherLinks = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  max-width: 700px;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & a {
    color: white;
    text-decoration: none;
    margin: 8px;
    opacity: 0.7;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      opacity: 1;
    }
  }
`

const Acknowledgements = styled.div`
  color: #9ba4ac;
  font-size: 0.9rem;
  margin-top: 32px;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <LogoLink href="/" aria-label="Visit SBS On Demand homepage">
        <LogoImage src="/images/logo.png" alt="SBS on demand" />
      </LogoLink>
      <div>
        <PopularLinks>
          <PopularLink href="/explore">Explore SBS</PopularLink>
          <PopularLink href="/help">Help</PopularLink>
          <PopularLink href="/contact-us">Contact Us</PopularLink>
        </PopularLinks>
        <PopularLinks>
          <Buy href="/buy-platform-1">
            Download 1
            <span className="material-symbols-outlined" aria-hidden>
              public
            </span>
          </Buy>
          <Buy href="/buy-platform-1">
            Download 2
            <span className="material-symbols-outlined" aria-hidden>
              public
            </span>
          </Buy>
          <SocialContainer>
            <SocialMedia
              href="/social-1"
              aria-label="Visit our account on social media platform 1"
            >
              <span className="material-symbols-outlined" aria-hidden>
                group
              </span>
            </SocialMedia>
            <SocialMedia
              href="/social-2"
              aria-label="Visit our account on social media platform 2"
            >
              <span className="material-symbols-outlined" aria-hidden>
                group
              </span>
            </SocialMedia>
            <SocialMedia
              href="/social-3"
              aria-label="Visit our account on social media platform 3"
            >
              <span className="material-symbols-outlined" aria-hidden>
                group
              </span>
            </SocialMedia>
          </SocialContainer>
        </PopularLinks>
        <OtherLinksContainer>
          <OtherLinks>
            <a href="/adio-description">Audio Description</a>
            <a href="/copyright">Copyright</a>
            <a href="terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy">Privacy</a>
            <a href="/online-preferences">Your online preferences</a>
            <a href="/advertise">Advertise with us</a>
            <a href="/complaints">Complaints</a>
            <a href="/codes-of-practices">SBS Codes of Practice</a>
            <a href="/careers">Careers</a>
            <a href="/about">About SBS</a>
          </OtherLinks>
        </OtherLinksContainer>
        <Acknowledgements>
          <p>
            SBS acknowledges the Traditional Owners of Country throughout
            Australia.
          </p>
          <p>© 2024 SBS</p>
        </Acknowledgements>
      </div>
    </StyledFooter>
  )
}
