import express from 'express';
import {render} from 'mjml-react';

import * as home from '.';
import * as email1 from './templates/email1';
import * as email2 from './templates/email2';
import * as emailCat from './templates/email-cat';
import * as emailProduits from './templates/email-3produits';

const port = 3000;
const app = express();

app.get('/1', (req, res) => {
  const {html} = render(email1.generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('/2', (req, res) => {
  const {html} = render(email2.generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('/3', (req, res) => {
  const {html} = render(emailCat.generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('/4', (req, res) => {
  const {html} = render(emailProduits.generate(), {validationLevel: 'soft'});
  res.send(html);
});

// var num;
// for (num = 1; num < 3; num++) {
//   app.get('/'+num, function(req, res){
//     const {html} = render(email + num .generate(), {validationLevel: 'soft'});
//     res.send(html) ;
//   }) ;
//   console.log("Faire un" +num+ "vers l'est");
// }



app.get('*', (req, res) => {
  const {html}  = render(home.generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
