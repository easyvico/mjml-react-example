import React, { Component } from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
  MjmlStyle,
  MjmlHero
} from 'mjml-react';

export const VisuelText = (props) => ([
  <MjmlHero
    mode="fixed-height"
    backgroundWidth="640px"
    backgroundHeight="340px"
    backgroundUrl="https://imgshare.io/images/2019/07/12/fotolia-176119722-subscription-monthly-m.jpg"
    padding="132px 0px"
    width="100%"
  >
    <MjmlText
      fontSize={35}
      align='center'
      color={props.color}
      textTransform='uppercase'
      letterSpacing={8}>
      {props.titre}
    </MjmlText>
  </MjmlHero>
]);