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
      <MjmlSection key="first" padding='10px 0px'>
        <MjmlColumn cssClass='blue-column'>
          <MjmlText textDecoration='underline' font-size='12px' color='#666666' align='center' padding='0'><a href='./email.html' style={{color: 'inherit'}}>{this.props.prenom} lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      // ,
      // <MjmlSection key="second" padding='0px 0px' backgroundColor="#ffffff">
      //   <MjmlColumn>
      //     <MjmlImage src='https://imgshare.io/images/2019/06/25/Signals-La-Rochelle-anime.gif' alt='logo' width={220} />
      //   </MjmlColumn>
      // </MjmlSection>
    ]);
  }

}