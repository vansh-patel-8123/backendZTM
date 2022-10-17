const axios = require('axios');

axios.get('https://www.google.com')
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log('All is Done !');
    });
