const axios = require("axios");
/*/
const headers = {
  "x-trackbox-username": "GLC",
  "x-trackbox-password": "21yOpE3Y6r2S",
  "x-api-key": "2643889w34df345676ssdas323tgc738",
  "Content-Type": "application/json",
  Origin: "http://localhost:3006",
};
/*/

const postData = (d) => {
  const url = `https://platform.adscobar.com/api/signup/procform`;
  const data = JSON.stringify({
    ai: "2958661",
    ci: "1",
    gi: "311",
    userip: d.ip,
    firstname: d.name,
    lastname: d.name,
    email: d.email,
    password: "Aa12345!",
    phone: d.phone,
    so: "amazon",
    sub: "FreeParam",
    MPC_1: d.answer,
    MPC_2: "FreeParam",
    MPC_3: "74588",
    MPC_4: "FreeParam",
    MPC_5: "FreeParam",
    MPC_6: "FreeParam",
    MPC_7: "FreeParam",
    MPC_8: "FreeParam",
    MPC_9: "FreeParam",
    MPC_10: "FreeParam",
  });

  const requestOptions = {
    method: "post",
    url: url,
    headers: {
      "x-trackbox-username": "GLC",
      "x-trackbox-password": "123456Aa",
      "x-api-key": "2643889w34df345676ssdas323tgc738",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(requestOptions)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = { postData };
