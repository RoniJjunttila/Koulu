const express = require('express');

const bodyParser = require('body-parser'); 

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})

let customers = [
    {id: '1588323375416', firstName: 'John', lastName: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', firstName: 'Mary', lastName: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', firstName: 'Peter', lastName: 'North', email: 'peter@north.com', phone: '901176'},
  ]

app.get("/api/customers", (req, res) => {
    res.json(customers);
});

app.get("/api/customers/:id", (req, res) => {
    const customerId = req.params.id;
    const customer = customers.filter(customer => customer.id === customerId);

    if (customer.length > 0) {
        res.json(customer);
    } else {
        res.status(404).end();
    }
})


app.post("/api/customers", (req, res) => {
    const id = Date.now().toString();
    const newcustomer = {'id' : id, ...req.body};

    customers = [...customers, newcustomer];

    res.json(newcustomer);
    
})


app.delete("/api/customers/:id", (req, res) => { 
    const id = req.params.id;
  
    customers = customers.filter(customer => customer.id !== id);
    res.status(204).end();
  })
  
app.put("/api/customers/:id", (req,res) => {
    const id = req.params.id;
    const updatedcustomer = {'id' : id, ...req.body};

    const index = customers.findIndex(customer => customer.id === id);

    customers.splice(index, 1, updatedcustomer);

    res.json(updatedcustomer);
})
