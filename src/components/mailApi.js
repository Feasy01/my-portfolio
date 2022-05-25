const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'b7df9c57e9mshd65dffe7440c278p12dd07jsnb011828d4f4b'
  }
};
export const sendMail =(data) => {
    const optionsAxios = {...options,data:data}
    console.log(optionsAxios)
    axios.request(optionsAxios)
    .then((response)=>console.log(response))
    .catch((response)=>console.error(response))
}
// export default sendMail()