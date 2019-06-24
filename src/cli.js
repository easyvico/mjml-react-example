import { render } from 'mjml-react';

import { generate } from './templates/email3';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
