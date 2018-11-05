const greeter = (rqe, res) => {
    const person =req.params.person;

    res.json({ hello: person });


};

module.exports = greeter 