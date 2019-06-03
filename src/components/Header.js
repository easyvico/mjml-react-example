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
  MjmlStyle
} from 'mjml-react';

export class Header extends Component {
  render() {
    return ([
      <MjmlSection key="first" padding='10px 0px'>
        <MjmlColumn cssClass='blue-column'>
          <MjmlText font-size='12px' color='#666666' align='center' padding='0'>{this.props.prenom} Si cet email ne s'affiche pas correctement, vous pouvez le visualiser gr&#226;ce &#225; ce
            <a href='./email.html' style={{color: 'inherit'}}> lien</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>,
      <MjmlSection key="second" padding='0px 0px' backgroundColor="#ffffff">
        <MjmlColumn>
          <MjmlImage src='https://imgshare.io/images/2019/06/03/logo_signals_anim6s.gif' alt='logo' width={220} />
        </MjmlColumn>
      </MjmlSection>
    ]);
  }

}