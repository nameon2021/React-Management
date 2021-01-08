const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '오키연구소',
            'birthday': '955555',
            'gender': '남자',
            'job': '연구원'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'KNE',
            'birthday': '960508',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '개발자',
            'birthday': '961127',
            'gender': '남자',
            'job': '이사'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));