import fetch from 'node-fetch';
/*
export const handleSnailFacts = async (req, res) => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    const body = await response.json();
    const facts = body.map(({text, createdAt}) =>({
        text,
        createdAt,
    }));
    res.send(facts);
};
*/

export const handleSnailFacts = async (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

