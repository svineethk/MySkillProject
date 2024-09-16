import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderElement = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
`
export const HeaderContainer = styled.div`
  height: 100px;
  width: 100vw;
  background-color: #f1f5f9;
`

export const HeaderLinkElement = styled(Link)`
  height: 80px;
  width: 300px;
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`

export const HeaderImageContainer = styled.img`
  height: 65px;
  width: 220px;
  background-size: cover;
  margin-left: 20px;
  margin-top: 10px;
`

export const ContentContainer = styled.div`
  height: 900px;
  width: 100vw;
  padding-left: 80px;
  padding-top: 50px;
  padding-right: 80px;
`

export const SkillContainer = styled.div`
  height: 600px;
  width: 95vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
`
export const SeparateSkillContainer = styled.div`
  height: 100px;
  min-width: 250px;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 20px;
`
export const SkillImage = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 20px;
`
export const SkillHeaderElement = styled.h1`
  font-family: Roboto;
  color: #1e293b;
  font-size: 21px;
`
export const LinkElement = styled(Link)`
  color: inherit;
  text-decoration: none;
`
export const ContentFailureContainer = styled.div`
  height: 900px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImageElement = styled.img`
  height: 400px;
  width: 400px;
`
export const FailureHeaderElement = styled.h1`
  font-family: Roboto;
  color: #4656a1;
`
export const FailureParagraphElement = styled.p`
  font-family: Roboto;
  color: #64748b;
`
export const RetryButtonElement = styled.button`
  height: 50px;
  width: 120px;
  color: #ffffff;
  background-color: #4656a1;
  border-radius: 8px;
  outline: none;
`
