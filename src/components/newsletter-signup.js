import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'styled-components'

import { MIN_MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { rhythm, scale, colors } from '../utils/typography'

import WowContainer from '../components/wow-container'

class NewsletterSignup extends React.Component {
  state = {
    email: '',
    result: {
      status: '',
      msg: ''
    }
  }

  onChange = e => {
    this.setState({ email: event.target.value })
  }

  onSubmit = async e => {
    e.preventDefault()
    const response = await addToMailchimp(this.state.email)
    this.setState({
      result: {
        status: response.result,
        msg: response.msg
      }
    })
  }

  render = () => (
    <WowContainer>
      <Form
        onSubmit={() => this.onSubmit(event)}
        className={this.state.result.status}
      >
        <Label>Newsletter</Label>
        <P>I will send you my latest content. No spam 👍</P>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.onChange}
          required
        />
        <Button type="submit">Subscribe</Button>
        {this.state.result.status === 'error' && (
          <Result>
            <ResultLabel>{this.state.result.status}</ResultLabel>
            <ResultMsg
              dangerouslySetInnerHTML={{ __html: this.state.result.msg }}
            />
          </Result>
        )}
      </Form>
      {this.state.result.status === 'success' && (
        <Result className="success">
          <ResultLabel>{this.state.result.status}</ResultLabel>
          <ResultMsg
            dangerouslySetInnerHTML={{ __html: this.state.result.msg }}
          />
        </Result>
      )}
    </WowContainer>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  position: relative;

  &.success {
    transform: translate(0, -64px);
    opacity: 0;
  }
`

const Label = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 32px;
  line-height: 32px;
  color: white;
`

const P = styled.p`
  margin-bottom: ${rhythm(1)};
`

const Button = styled.button`
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 2)};
  margin: 0;
  background: rgb(165, 219, 237);
  border: 0;
  color: ${colors.primary};

  &:hover {
    background: rgb(165, 219, 237);
    box-shadow: 0 8px 16px rgba(48, 35, 174, 0.8);
  }
`

const Input = styled.input`
  margin: 0 0 ${rhythm(1 / 4)};
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 2)};
  width: 100%;
  border: none;

  ${MIN_MOBILE_MEDIA_QUERY} {
    width: auto;
    min-width: 50%;
  }
`

const Result = styled.div`
  margin-top: 32px;
  transition: all 0.2s ease-in-out;
  z-index: 1;
  position: relative;

  &.success {
    margin-top: 0;
    transform: scaleY(1);
    transform-origin: bottom;
    opacity: 1;
  }
`

const ResultLabel = styled(Label)`
  font-size: 24px;
  line-height: 24px;
  text-transform: capitalize;
`

const ResultMsg = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;

  a {
    color: white;
    box-shadow: none;
    text-decoration: underline;
  }
`

export default NewsletterSignup