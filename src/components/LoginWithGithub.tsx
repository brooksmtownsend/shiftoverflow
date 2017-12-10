import * as React from 'react'
import '../styles/SocialButtons.less'
import '../styles/App.css'

const clientId = '7128d7abe670aed8af0c'

export class LoginWithGithub extends React.Component {
  render() {
    return (
      <a className='btn btn-block btn-github' style={{marginTop: '15px'}} href={"https://github.com/login/oauth/authorize?scope=user:email&client_id=" + clientId}>Login with Github</a>
    )
  }
}