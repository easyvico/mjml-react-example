import { render } from 'mjml-react';

import { generate } from './templates/email-cat';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
