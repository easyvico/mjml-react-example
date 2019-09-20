import { render } from 'mjml-react';

import { generate } from './templates/email-categorie/email-cat';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
