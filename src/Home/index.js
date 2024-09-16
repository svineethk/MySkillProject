import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  AppContainer,
  HeaderContainer,
  HeaderImageContainer,
  HeaderLinkElement,
  ContentContainer,
  HeaderElement,
  SkillContainer,
  SeparateSkillContainer,
  SkillImage,
  SkillHeaderElement,
  LinkElement,
  ContentFailureContainer,
  FailureImageElement,
  FailureHeaderElement,
  FailureParagraphElement,
  RetryButtonElement,
} from './StyledComponents'

const apiConstantStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {courseData: [], apiStatus: apiConstantStatus.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiConstantStatus.inProgress})

    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

    const response = await fetch(coursesApiUrl)
    if (response.ok === true) {
      const responseData = await response.json()
      const updatedResponseData = responseData.courses.map(eachCourse => ({
        id: eachCourse.id,
        logoUrl: eachCourse.logo_url,
        name: eachCourse.name,
      }))
      this.setState({
        courseData: updatedResponseData,
        apiStatus: apiConstantStatus.success,
      })
    } else {
      this.setState({apiStatus: apiConstantStatus.failure})
    }
  }

  getCourseDetailsSuccess = () => {
    const {courseData, apiStatus} = this.state
    console.log(apiStatus)

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
        <ContentContainer>
          <HeaderElement>Courses</HeaderElement>
          <SkillContainer>
            {courseData.map(eachSkill => (
              <LinkElement to={`/courses/${eachSkill.id}`} key={eachSkill.id}>
                <SeparateSkillContainer>
                  <SkillImage src={eachSkill.logoUrl} />
                  <SkillHeaderElement>{eachSkill.name}</SkillHeaderElement>
                </SeparateSkillContainer>
              </LinkElement>
            ))}
          </SkillContainer>
        </ContentContainer>
      </AppContainer>
    )
  }

  retryApiDetails = () => {
    this.setState({apiStatus: apiConstantStatus.failure}, this.getCourseDetails)
  }

  getCourseDetailsFailure = () => (
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

  getCourseDetailsProgress = () => (
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
        return this.getCourseDetailsSuccess()
      case apiConstantStatus.failure:
        return this.getCourseDetailsFailure()
      case apiConstantStatus.inProgress:
        return this.getCourseDetailsProgress()
      default:
        return null
    }
  }
}
export default Home
