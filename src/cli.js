import { render } from 'mjml-react';

import { generate } from './templates/email1';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
