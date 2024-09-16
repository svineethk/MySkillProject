import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  AppContainer,
  HeaderContainer,
  HeaderLinkElement,
  HeaderImageContainer,
  SkillHeaderElement,
  ContentFailureContainer,
  FailureImageElement,
  FailureHeaderElement,
  FailureParagraphElement,
  RetryButtonElement,
} from '../Home/StyledComponents'
import {
  SkillContentContainer,
  SkillImageElement,
  SkillDescriptionContainer,
  SkillParagraphElement,
} from './StyledComponents'

const apiConstantStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {sectionApiDetail: {}, apiStatus: apiConstantStatus.initial}

  componentDidMount() {
    this.getRespectiveSkillDetails()
  }

  getRespectiveSkillDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiConstantStatus.inProgress})

    const courseDetailsApiUrl = `https://apis.ccbp.in/te/courses/${id}`

    const response = await fetch(courseDetailsApiUrl)

    if (response.ok === true) {
      const responseData = await response.json()

      const updatedResponseData = {
        id: responseData.course_details.id,
        name: responseData.course_details.name,
        imageUrl: responseData.course_details.image_url,
        description: responseData.course_details.description,
      }
      this.setState({
        sectionApiDetail: updatedResponseData,
        apiStatus: apiConstantStatus.success,
      })
    } else {
      this.setState({apiStatus: apiConstantStatus.failure})
    }
  }

  getSkillSuccess = () => {
    const {sectionApiDetail} = this.state

    return (
      <AppContainer>
        <HeaderContainer>
          <HeaderLinkElement to="/">
            <HeaderImageContainer
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
            />
          </HeaderLinkElement>
        </HeaderContainer>
        <SkillContentContainer>
          <SkillImageElement
            src={sectionApiDetail.imageUrl}
            alt={sectionApiDetail.name}
          />
          <SkillDescriptionContainer>
            <SkillHeaderElement>{sectionApiDetail.name}</SkillHeaderElement>
            <SkillParagraphElement>
              {sectionApiDetail.description}
            </SkillParagraphElement>
          </SkillDescriptionContainer>
        </SkillContentContainer>
      </AppContainer>
    )
  }

  getSkillFailure = () => (
    <AppContainer>
      <HeaderContainer>
        <HeaderLinkElement to="/">
          <HeaderImageContainer
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </HeaderLinkElement>
      </HeaderContainer>
      <ContentFailureContainer>
        <FailureImageElement
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <FailureHeaderElement>Oops! Something Went Wrong</FailureHeaderElement>
        <FailureParagraphElement>
          We cannot seem to find the page you are looking for.
        </FailureParagraphElement>
        <RetryButtonElement onClick={this.retryApiDetails}>
          Retry
        </RetryButtonElement>
      </ContentFailureContainer>
    </AppContainer>
  )

  getSkillInprogress = () => (
    <AppContainer>
      <HeaderContainer>
        <HeaderLinkElement to="/">
          <HeaderImageContainer
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </HeaderLinkElement>
      </HeaderContainer>
      <ContentFailureContainer>
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        </div>
      </ContentFailureContainer>
    </AppContainer>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstantStatus.success:
        return this.getSkillSuccess()
      case apiConstantStatus.failure:
        return this.getSkillFailure()
      case apiConstantStatus.inProgress:
        return this.getSkillInprogress()
      default:
        return null
    }
  }
}
export default CourseItemDetails
