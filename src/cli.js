import { render } from 'mjml-react';

import { generate } from './templates/email-3produits';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
