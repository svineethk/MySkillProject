import {
  AppContainer,
  NotfoundImageElement,
  NotfoundHeaderElement,
  NotfoundParagraphElement,
} from './StyledComponents'

const NotFound = () => (
  <AppContainer>
    <NotfoundImageElement
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
    />
    <NotfoundHeaderElement>Page Not Found</NotfoundHeaderElement>
    <NotfoundParagraphElement>
      We are sorry, the page you requested could not be found
    </NotfoundParagraphElement>
  </AppContainer>
)

export default NotFound
