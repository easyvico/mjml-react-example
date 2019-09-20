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
  MjmlDivider,
  MjmlClass,
  MjmlGroup,
  MjmlNavbar
} from 'mjml-react';

import { Head } from '../../components/Head';
import { Footer } from '../../components/Footer';
import { BlocImageText} from '../../components/BlocImageTexte';
import { VisuelText } from '../../components/VisuelText';
import { TextIntro } from '../../components/TextIntro';
import { Divider } from '../../components/Divider';
import { BlocHeader2Liens } from '../../components/BlocHeader2Liens';
import { Banniere } from '../../components/Banniere';
import { LogoTheme } from '../../components/LogoTheme';


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
  color7: '#707070',
  color8: '#d65a2b'
};

export const generate = () => {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={640} backgroundColor={style.color6}>
        <BlocHeader2Liens
          color4={style.color4}
          color7={style.color7}
          color={style.color0}
          color5={style.color5}
          declinaison='Solutions entrepôt'
        />
        <LogoTheme
          color={style.color0}
          src='http://p7tre.emv3.com/IL/7/2/2/1101071722/327194517.png'
          image='solutions entrepôt'
        />
        <VisuelText
          lien='https://www.lienCategorie.fr/'
          background={style.color0}
          color={style.color0}
          titre='Titre email catégorie - imag 640X340'
          padding='100px 0px'
        />     
        <TextIntro
          lien='https://www.lienTexte.fr/'
          fontsize='18px'
          align='center'
          color={style.color0}
          paddingSection='10px 20px 10px'
          civilite='[EMV FIELD]CIVILITE[EMV /FIELD] [EMV FIELD]NOM_CONTACT[EMV /FIELD]'
          texte='Texte catégorie. Lorem psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Divider
          padding='0px 20px 10px'
          padding0='0px'
          border={style.color8}
          background={style.color0}
        />

        <MjmlSection key="first" padding='0 10px' backgroundColor={style.color0}>
          <BlocImageText
            image="image 1 - taille 290X290"
            titre="Titre 1 catégorie"
            texte="> En savoir plus"
            lien='https://www.lien1.fr/'
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            image="image 2 - taille 290X290"
            titre="Titre 2 catégorie"
            texte="> En savoir plus"
            lien='https://www.lien2.fr/'
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>
        <MjmlSection key="first" padding='0 10px 20px 10px' backgroundColor={style.color0}>
          <BlocImageText
            image="image 3 - taille 290X290"
            titre="Titre 3 catégorie"
            texte="> En savoir plus"
            lien='https://www.lien3.fr/'
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
            color3={style.color3}
          />
          <BlocImageText
            image="image 4 - taille 290X290"
            titre="Titre 4 catégorie"
            texte="> En savoir plus"
            lien='https://www.lien4.fr/'
            color={style.color0}
            color1={style.color1}
            color2={style.color2}
          />
        </MjmlSection>

        <Banniere
          titre='Titre bannière'
          texte='Texte bannière - img min 320X120 / max 400X150'
          lien="> Cliquez ici"
          color={style.color0}
          color1={style.color1}
          color2={style.color2}
        />

        <Footer
          colorDivider={style.color8}
          color4={style.color4}
		      color={style.color0}
          color2={style.color2}
          background={style.color0}
        />
      </MjmlBody>
    </Mjml>
  );
};
