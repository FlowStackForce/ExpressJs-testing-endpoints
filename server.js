const express = require('express');

const familyRouter = require ('./routes/family.router')
const messagesRouter = require ('./routes/messages.router')

const app = express(); 

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json ());

app.use('/family', familyRouter);
app.use('/message', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}..`);
});