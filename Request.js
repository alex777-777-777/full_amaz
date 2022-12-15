const axios = require("axios");

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
    password: "123456Aa",
    phone: d.phone,
    so: "AMAZON",
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
      "User-Agent": "WordPress/6.0.3; https://fox.tradergroupinc.space",
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
const postToCRMFranklin = (d) => {
  const url = `https://frnkaffs-api.com/api/v2/leads`;

  const data = new URLSearchParams({
    email: d.email,
    firstName: d.name,
    lastName: d.name,
    password: "Pas21word2",
    phone: Number(d.phone),
    ip: d.ip,
    custom1: d.answer,
  });
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
    headers: {
      "Api-Key": "6D0D404D-DF26-1A5E-A88D-E0ECC6A4E17E ",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  axios(requestOptions)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = { postData, postToCRMFranklin };
