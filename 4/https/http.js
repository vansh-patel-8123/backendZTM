const request = require('./request');
const response = require('./response');


const RequestResponse = (URL,Data) => {
    request.req(URL,Data);
    const Response = response.resp(Data);
    console.log(Response);
};

RequestResponse('https://www.google.com','Hello World');