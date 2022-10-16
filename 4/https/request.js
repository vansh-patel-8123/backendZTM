const Encrypt = (URL,Data)  => {
    console.log("data is encryping...");
    return `EncryptData: ${Data}`;
};

const req = (URL, Data) => {
    console.log("data is sending...");
    Encrypt(URL,Data);
    console.log("Data is encrypted...");
};

module.exports = {
    req,
};