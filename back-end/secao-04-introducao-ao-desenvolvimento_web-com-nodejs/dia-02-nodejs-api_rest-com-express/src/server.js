const express = require('express');
const users = require('./data');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
    console.log('Rota / acessada!');
    response.send('Respondendo a requisição GET /');
});

app.get('/users', (_request, response) => {
    response.status(200).send(users);
});

app.post('/users', (request, response) => {
    const { name, age } = request.body;
    const user = { name, age };
    users.push(user);
    response.status(201).json(user);
});

app.listen(3000, () => {
    console.log('Server on port', 3000);
});
