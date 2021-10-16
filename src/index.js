import express from 'express';
import { handleGreeting } from './hola.js';
import { handleSnailFacts } from './snailFacts.js';


const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hola mi amigo!')
});

app.get('/hello/:nume?', (req, res) => {
    handleGreeting(req, res)
});

app.get('/snail/facts', (req, res) => {
    handleSnailFacts(req, res)
});
app.listen(port, () => {
    console.log('Server started on', port);
});