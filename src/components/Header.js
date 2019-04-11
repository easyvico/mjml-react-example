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
  // static propTypes = {
  //   children: node.isRequired
  // }
  render() {
    //const {children, ...rest} = this.props;
    return ([
      <MjmlSection key="first" padding='10px 0px'>
        <MjmlColumn cssClass='blue-column'>
          <MjmlText font-size='12px' color='#666666' align='center' padding='0'>{this.props.prenom} Si cet email ne s'affiche pas correctement, vous pouvez le visualiser gr&#226;ce &#225; ce
            <a href='./email.html' style={{color: 'inherit'}}> lien</a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>,
      <MjmlSection key="second" padding='10px 0px' backgroundColor="#ede9e2">
        <MjmlColumn>
          <MjmlImage src='http://fakeimg.pl/60x60/' alt='logo' width={60} />
        </MjmlColumn>
      </MjmlSection>
    ]);
  }

}
// export const Header = (props) => ([
//   <MjmlSection key="first" padding='10px 0px'>
//     <MjmlColumn cssClass={styles.exampleStyle}>
//       <MjmlText font-size='12px' color='#666666' align='center' padding='0'>{props.prenom} Si cet email ne s'affiche pas correctement, vous pouvez le visualiser gr&#226;ce &#225; ce
//         <a href='http://www.maif.fr' style={{color: 'inherit'}}> lien</a>
//       </MjmlText>
//     </MjmlColumn>
//   </MjmlSection>,
//   <MjmlSection key="second" padding='10px 0px' backgroundColor="#ede9e2">
//     <MjmlColumn>
//       <MjmlImage src='http://fakeimg.pl/60x60/' alt='logo' width={60} />
//     </MjmlColumn>
//   </MjmlSection>
// ]);