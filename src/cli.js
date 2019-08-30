import { render } from 'mjml-react';

import { generate } from './templates/email-categorie/email-accessibilite';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
