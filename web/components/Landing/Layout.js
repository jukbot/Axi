import React from 'react'
import styled from 'react-emotion'
import Link from 'next/link'

import Icon from '../Icon'

import {smallScreen, mediumScreen, font} from '../../core/style'

export const landingColor = 'hsl(264, 46%, 41%)'
export const subColor = '#757575'

export const Page = styled.div`
  font-family: ${font};
  font-weight: 300;
`

export const Anchor = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
`

export const MoreText = styled.span`
  align-self: center;
  margin-right: 0.6em;
  transition: all 1s cubic-bezier(0.03, 0.86, 0.57, 1);

  color: ${props => props.color};
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: all;

  &:hover > span {
    margin-right: 1.3em;
  }
`

export const DecoImage = styled.img`
  align-self: center;
  width: ${props => props.width || 50}%;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.30));

  @media screen and (max-width: ${smallScreen}px) {
    width: ${props => props.sWidth || props.width || 50}%;
    margin-top: ${props => props.sTop || 1}em;
    margin-bottom: ${props => props.sBottom || 1}em;
  }
`

export const Break = styled.br`
  @media screen and (max-width: ${props => props.stop || smallScreen}px) {
    display: none;
  }
`

export const BreakMedium = styled.br`
  @media screen and (max-width: ${mediumScreen}px) {
    display: none;
  }
`

export const More = ({color = landingColor, text, link = '/'}) => (
  <Link href={link} passHref>
    <Anchor>
      <MoreText color={color}>{text}</MoreText>
      <Icon i='play' size={1.5} fill={color} />
    </Anchor>
  </Link>
)
