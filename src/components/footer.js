import React from 'react'
import styled from 'styled-components'

import Navigation from '../components/navigation'
import { colors, rhythm } from '../utils/typography'

const Footer = () => (
  <StyledFooter>
    <Navigation compact={true} />
    <Copyright>
      <div>&copy; Kostas Mavropalias.</div>
      <SourceLink href="https://github.com/mavropalias/icon-of-com">
        Source
      </SourceLink>
    </Copyright>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  margin-top: 64px;
  text-align: center;
`

const Copyright = styled.small`
  margin-top: 32px;
  display: block;
  color: ${colors.secondary};
  font-size: 14px;
  line-height: 14px;
`

const SourceLink = styled.a`
  margin-top: 16px;
  color: ${colors.secondary};
  display: inline-block;
  font-size: 11px;
`

export default Footer
