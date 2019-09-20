import React, { Component } from 'react';
import {
  Mjml,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText
} from 'mjml-react';

import { Header } from './Header';
import { LogoNavBar2Liens } from './LogoNavBar2Liens';

export const BlocHeader2Liens = (props) => ([
  <Header
    color4={props.color4}
    color7={props.color7}
    background={props.color}
    />,
  <LogoNavBar2Liens
    color={props.color}
    color5={props.color5}
    declinaison={props.declinaison}
  />
]);
