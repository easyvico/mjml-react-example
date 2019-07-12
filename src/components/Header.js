import React, { Component } from 'react';
import {
  Mjml,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText
} from 'mjml-react';

export class Header extends Component {
  render() {
    return ([
      <MjmlSection key="first" padding='10px 0px' backgroundColor="#ffffff">
        <MjmlColumn cssClass='blue-column'>
          <MjmlText 
            textDecoration='underline'
            font-size='12px'
            color='#004990'
            align='center'
            padding='0'>
            <a href='./email.html' style={{color: 'inherit'}}>{this.props.prenom} lo adipiscing elit, sed do eiusmod tempor incididunt</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>,
      <MjmlSection key="second" padding='0px 0px' backgroundColor="#ffffff">
        <MjmlColumn>
          <MjmlText
            textDecoration='underline'
            font-size='12px'
            color='#707070'
            align='center'
            padding='0'>
            <a href='./email.html' style={{color: 'inherit'}}>Version en ligne</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    ]);
  }

}