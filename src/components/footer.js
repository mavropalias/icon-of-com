import React from 'react'
import styled from 'styled-components'

import Navigation from '../components/navigation'
import { colors, rhythm } from '../utils/typography'

const Footer = () => (
  <StyledFooter>
    <Navigation compact={true} />
    <Copyright>&copy; Kostas Mavropalias</Copyright>
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

export default Footer
