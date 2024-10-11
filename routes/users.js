const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query.name); /* how to access query parameters like "?name=toby" */
  res.send('Users list');
});

router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Test' });
});

router.post('/', (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.firstName, age: 25 });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error making new user');
    res.render('users/new', { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send('Create User');
});

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 26 },
  { name: 'Jake', age: 27 },
];

/* Det er vigtigt at sætte sine dynamic routes til sidst da de ellers kan blive overskrevet af static routes hvis de ligger efter */

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);

    res.send(`Get User ${req.params.id} ${req.user.name} ${req.user.age}`);
  })
  .put((req, res) => {
    res.send(`Put  User ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Post User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

/* Når vi tilføjer denne til vores "id" route så kører den dette stykke kode hver gang en ad "id" routes bliver besøgt.
Det vil sige at vi f.eks. som her kan sørge for at "user" er tilgængelig på req objektet i alle user routes*/

router.param('id', (req, res, next, id) => {
  req.user = users[id];

  next(); /* Dette sørger for at koden kører videre, hvis ikke "next();" var der, så vil browser blots stå og loade */
});

/* router.get('/:id', (req, res) => {
  res.send(`Get User ${req.params.id}`);
});
router.put('/:id', (req, res) => {
  res.send(`Put  User ${req.params.id}`);
});
router.post('/:id', (req, res) => {
  res.send(`Post User ${req.params.id}`);
});
router.delete('/:id', (req, res) => {
  res.send(`Delete User ${req.params.id}`);
}); */
module.exports = router;
