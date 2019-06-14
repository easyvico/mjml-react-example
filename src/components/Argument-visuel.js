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

export class ArgumentVisuel extends Component {
  render() {
    return ([
      <MjmlSection key="first" padding='20px' backgroundColor="#ffffff">
        <MjmlColumn>
          <MjmlImage src='http://fakeimg.pl/270x246/' alt='picto' />
        </MjmlColumn>
        <MjmlColumn cssClass='blue-column'>
          <MjmlText font-size='18px' text-transform='uppercase' padding='15px 0 0 10px' color='green'>
            <a href='./email.html' style={{color: 'inherit'}}>Titre de l'argumentaire</a>
          </MjmlText>
          <MjmlText>
            <p style={{borderTop:'3px solid #ede9e2', width:'100px', margin:'10px auto'}}></p>
          </MjmlText>
          <MjmlText font-size='12px' color='#666666' padding='0 0 15px 10px'>
            <a href='./email.html' style={{color: 'inherit'}}>Le marché immobilier repart, les prix sont stables et les taux d’intérêts avantageux  et, tout particulièrement dans les grandes villes, il faut parfois moins de 3 ans pour rentabiliser un achat*…. Ça vaut la peine d’y réfléchir sérieusement.</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    ]);
  }

}