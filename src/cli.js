import { render } from 'mjml-react';

import { generate } from './templates/email-mono';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
