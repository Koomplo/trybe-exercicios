const express = require('express');

const app = express();

app.get('/', (request, response) => {
    console.log('Rota / acessada!');
    response.send('Respondendo a requisição GET /');
})

app.listen(3000, () => {
    console.log('Server on port', 3000);
});
