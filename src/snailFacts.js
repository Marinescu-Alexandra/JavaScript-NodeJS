import fetch from 'node-fetch';

export const handleSnailFacts = async (req, res) => {

    const body = {a: 1};
    const response = await fetch('http://headers.jsontest.com/', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    res.send(data);
    console.log(data);
};

/* https://cat-fact.herokuapp.com/#/snail/facts #sadface */
