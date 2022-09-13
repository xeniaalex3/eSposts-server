import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
    return response.json([

        {
            id: 1,
            name: 'notify 1'
        },
        {
            id: 2,
            name: 'notify 2'

        },
        {
            id: 3,
            name: 'notify 3'
        },
    ])
})

app.listen(3333)