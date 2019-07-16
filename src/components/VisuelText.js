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
    backgroundWidth="600px"
    backgroundHeight="320px"
    backgroundUrl="https://imgshare.io/images/2019/07/12/fotolia-176119722-subscription-monthly-m.jpg"
    padding="150px 0px"
    width="100%">
    <MjmlText align='center' color={props.color0}>Test</MjmlText>
  </MjmlHero>
]);