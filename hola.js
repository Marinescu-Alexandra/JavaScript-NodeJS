const handleGreeting = ({params}, res) => {
    if(!params.nume){
        res.send("Hola mi amigo")
    }else {
        const message = 'Hola ' + params.nume;
        res.send(message);
    }
} 

module.exports = handleGreeting;