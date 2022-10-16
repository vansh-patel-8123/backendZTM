const Decrypt = (Data) => {
    console.log("data is decryping...");
    return  `Decrypted Data : ${Data}`;
};

const resp = (Data) => {
    console.log("data is receiveing...");
    const DecryptData = Decrypt(Data);
    console.log("data is decryped...");
    return DecryptData;
};

module.exports = {
    resp,
}