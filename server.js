const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image' : 'https://placeimg.com/64/64/any',
            'name': 'KNE React library test version',
            'birthday': '20200107',
            'gender' : 'male',
            'job' : 'software developer React + Firebase test' 
        },
        {
            'id': 2,
            'image' : 'https://placeimg.com/64/64/any',
            'name': 'KNE React library test version',
            'birthday': '20200107',
            'gender' : 'male',
            'job' : 'software developer React + Firebase test' 
        },
        {
            'id': 3,
            'image' : 'https://placeimg.com/64/64/any',
            'name': 'KNE React library test version',
            'birthday': '20200107',
            'gender' : 'male',
            'job' : 'software developer React + Firebase test' 
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));