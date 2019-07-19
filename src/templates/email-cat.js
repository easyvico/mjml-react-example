import React from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlStyle,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
  MjmlAttributes,
  MjmlWrapper,
  MjmlDivider,
  MjmlClass,
  MjmlGroup,
  MjmlCarousel,
  MjmlCarouselImage,
  MjmlNavbar
} from 'mjml-react';

import { Header } from '../components/Header';
import { Head } from '../components/Head';
import { Visuel } from '../components/Visuel';
import { Argument } from '../components/Argument';
import { Accroche } from '../components/Accroche-promesse';
import { CtaIntro } from '../components/Cta-intro';
import { Cta } from '../components/Cta';
import { Footer } from '../components/Footer';
import { Mentions } from '../components/Mentions';
import { ArgumentVisuel } from '../components/Argument-visuel';
import { BlocImageText} from '../components/BlocImageTexte';
import { LogoNavBar } from '../components/LogoNavBar';
import { VisuelText } from '../components/VisuelText';
import { TextIntro } from '../components/TextIntro';
import { Divider } from '../components/Divider';
import { PictoText } from '../components/PictoText';
import { Intitule } from '../components/Intitule';



const style = {
  tiret: {
    borderTop:'3px solid pink', 
    width:'100px', 
    margin:'10px auto'
  },
  fontVerdana: {
    fontFamily: 'Verdana,Geneva,sans-serif',
    fontSize: '40px',
    color: 'mediumvioletred'
  },
  color0: '#ffffff',
  color1: '#3c4858',
  color2: '#fd3d0e',
  color3: '#F5F5F5',
  color4: '#004990',
  color5: '#cccccc',
  color6: '#F8F8F8',
  color7: '#707070'
};

export const generate = () => {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={640} backgroundColor={style.color6}>
        <Header
          color4={style.color4}
          color7={style.color7}
          background={style.color0}/>

        <LogoNavBar
          color={style.color0}
          color5={style.color5}
        />

        <VisuelText
          color={style.color0}
        />

        <MjmlSection 
          backgroundColor={style.color0}
          padding='20px 20px 10px'>
          <MjmlColumn>
            <Intitule
              padding='0' 
              nom='[EMV FIELD]CIVILITE[EMV /FIELD] [EMV FIELD]NOM_CONTACT[EMV /FIELD]'
            />
            <TextIntro
              fontsize='20px'
              align='center'
              texte='Lorem psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
            />
          </MjmlColumn>
        </MjmlSection>

        <Divider
          padding='0px 20px 10px'
          padding0='0px'
          border={style.color5}
          background={style.color0}
        />

        <MjmlSection key="first" padding='0 10px' backgroundColor={style.color0}>
          <BlocImageText
            titre="Transport des matières dangereuse"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            titre="Signalisation pour les véhicules"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>

        <MjmlSection key="first" padding='0 10px' backgroundColor={style.color0}>
          <BlocImageText
            titre="&Eacute;quipements pour véhicules"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            titre="Emballage"
            lien="> En savoir plus"
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>

        <Divider 
          border={style.color4}
          background={style.color0}
        />

        <MjmlSection backgroundColor={style.color0} padding='20px 20px 0px'>
          <PictoText
            lien='https://www.signals.fr/cms/paiement.html?memberid=29894357930'
            picto='https://imgshare.io/images/2019/07/16/ico-creditcard.png'
            titre='Paiement sécurisé par CB'
            color={style.color4}
          />
          <PictoText
            lien='https://www.signals.fr/contacts?memberid=29894357930'
            picto='https://imgshare.io/images/2019/07/16/ico-headphone.png'
            titre='Du lundi au vendredi 8h-18h'
            color={style.color4}
          />
          <PictoText
            lien='https://www.signals.fr/cms/livraison.html?memberid=29894357930'
            picto='https://imgshare.io/images/2019/07/16/ico-rocket.png'
            titre='Livraison gratuite sous 24 à 48h'
            color={style.color4}
          />
        </MjmlSection>

        <MjmlSection backgroundColor={style.color0}>
          <MjmlColumn>
            <Cta
              lien='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV11d5Pm2HfS9d6xeX97o_8zlXLYyIkU0VF1r4lL2aou4q&c=7EKibOF-ZZHjknNbHOXuxA'
              text='devis gratuit'
              color={style.color2}
              border={style.color2}
              width='91%'
              paddingbottom='15px'
            />
          </MjmlColumn>
          <MjmlColumn>
            <Cta
              lien='http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1wVE5p8bdPE91adlnlY84XDYsxLywEjDBdg7UYGPg_Xm&c=7EKibOF-ZZHjknNbHOXuxA'
              text='catalogues virtuels'
              color={style.color2}
              border={style.color2}
              width='91%'
              paddingbottom='15px'
            />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection backgroundColor={style.color0} padding='20px 30px'>
          <MjmlGroup>
            <MjmlColumn>
              <MjmlImage
              alt="Facebook"
              href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV15lmpKODlvF8x0SpBsIqb57vgZbb58jzNmpNdYh7HUfJ&c=7EKibOF-ZZHjknNbHOXuxA"
              width={35}
              src="https://imgshare.io/images/2019/07/16/ico-facebook.png">
              </MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
              alt="Youtube"
              href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV11voj59nJQWFrbVBfoVbJXJ9DtBGcc_Btv7aJKQ7mdk2&c=7EKibOF-ZZHjknNbHOXuxA"
              width={35}
              src="https://imgshare.io/images/2019/07/16/ico-youtube.png">
              </MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
              alt="Twitter"
              href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV18BrHJan_8DvKbAIAwNd_RykC6f4p6FDLRMSEZNhTAgD&c=7EKibOF-ZZHjknNbHOXuxA"
              width={35}
              src="https://imgshare.io/images/2019/07/16/ico-twitter.png">
              </MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
              alt="Linkdn"
              href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV1w3qrsKgDbx9RBS5bugHYPNOsCq0GoAblhf1_78sssCX&c=7EKibOF-ZZHjknNbHOXuxA"
              width={35}
              src="https://imgshare.io/images/2019/07/16/ico-linkdn.png">
              </MjmlImage>
            </MjmlColumn>
            <MjmlColumn>
              <MjmlImage
              alt="Blog"
              href="http://p7tre.emv3.com/HP?b=jEA35O-6Y27TnJl3cvhV153B5d7aSU7PaGeq9AfsPqSsD-BGEeseZv23s8bTVJQ2&c=7EKibOF-ZZHjknNbHOXuxA"
              width={35}
              src="https://imgshare.io/images/2019/07/16/ico-blog.png">
              </MjmlImage>
            </MjmlColumn>
          </MjmlGroup>
        </MjmlSection>

        <Mentions 
          background={style.color4}
          color={style.color0}
        />
      </MjmlBody>
    </Mjml>
  );
};
