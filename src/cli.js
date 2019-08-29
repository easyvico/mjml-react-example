import { render } from 'mjml-react';

import { generate } from './templates/email-entrepot';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
