export const handleGreeting = ({params}, res) => {
    if(!params.nume){
        res.send("Holla mi amigo")
    }else {
        const message = 'Hola ' + params.nume;
        res.send(message);
    }
} 


