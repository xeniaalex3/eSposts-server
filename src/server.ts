import express from 'express';

const app = express();

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
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
        {
            id: 4,
            name: 'notify 4'
        },
        {
            id: 5,
            name: 'notify 5'
        },
    ])
});

app.get('/ads/:id/discord', (request, response) => {
    return response.json([
    ])
});

app.listen(3333)