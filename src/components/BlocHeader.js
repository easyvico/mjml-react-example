import React, { Component } from 'react';
import {
  Mjml,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText
} from 'mjml-react';

import { Header } from './Header';
import { LogoNavBar } from './LogoNavBar';

export const BlocHeader = (props) => ([
  <Header
    color4={props.color4}
    color7={props.color7}
    background={props.color}
    />,
  <LogoNavBar
    color={props.color}
    color5={props.color5}
  />
]);
