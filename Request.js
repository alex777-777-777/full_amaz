const axios = require("axios");

const postDataToCrmAdscobar = (d) => {
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
    so: d.land,
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

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
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
    offerName: "Amazon",
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

  return axios(requestOptions)
    .then((response) => response)
    .catch(function (error) {
      return error;
    });
};

const postDataToCrmHellLeads = (d) => {
  const url = `https://bo.hellleadbox.com/api/signup/procform`;
  const data = JSON.stringify({
    ai: "2958183",
    ci: "1",
    gi: "200",
    userip: d.ip,
    firstname: d.name,
    lastname: d.name,
    email: d.email,
    password: "X1TQokgt60",
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
      "x-trackbox-username": "GLCSale",
      "x-trackbox-password": "X1TQokgt60",
      "x-api-key": "2643889w34df345676ssdas323tgc738",
      "Content-Type": "application/json",
      "User-Agent": "WordPress/6.0.3; https://fox.tradergroupinc.space",
    },
    data: data,
  };

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
const postDataToCrmTssuccess = (d) => {
  const data = {
    token: "Bms3DQEd9Ce8TWRykZxMKwzXcnP2aH",
    method: "registration",
    user: {
      first_name: d.name,
      last_name: "test",
      email: d.email,
      phone: d.phone,
      campaign_name: "Amazon",
      country_iso: d.geo,
      password: "sdawedsad",
      _comment: d.answer,
      source_id: 1,
    },
  };

  const config = {
    method: "post",
    url: "https://api.tssuccess.top",

    data: data,
  };

  return axios(config)
    .then((res) => res)
    .catch((err) => err);
};

const postDataToCRMVikTeam = (d) => {
  const url = `https://cryptcrm.site/api/ext/add.json?id=68-52e3ee9191f6f135e68b689a135516a6`;
  const data = {
    flow: "68-52e3ee9191f6f135e68b689a135516a6",
    offer: d.offerId,
    ip: d.ip,
    name: d.name,
    last: d.name,
    phone: d.phone,
    email: d.email,
    country: d.geo,
  };
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
  };
  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
const postToCRMTrafficSpace = (d) => {
  const url = `https://pluton-api.store/api/v2/leads`;

  const data = new URLSearchParams({
    email: d.email,
    firstName: d.name,
    lastName: d.name,
    password: "Pas21word2",
    phone: d.phone,
    ip: d.ip,
    custom1: d.answer,
    offerName: "Tesla",
  });
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
    headers: {
      "Api-Key": "39E6CC06-116D-5D18-8AED-DC5B7E47BD2F",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};

const postDataToCrmTraffDrive = (d) => {
  const url = `https://platform.adscobar.com/api/signup/procform`;
  const data = JSON.stringify({
    ai: "2958661",
    ci: "1",
    gi: "90",
    userip: d.ip,
    firstname: d.name,
    lastname: d.name,
    email: d.email,
    password: "123456Aa",
    phone: d.phone,
    so: d.land,
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
      "x-trackbox-password": "Td987654321!",
      "x-api-key": "264388973aaa9b2f9eb2aa84a9c7382e",
      "Content-Type": "application/json",
      "User-Agent": "WordPress/6.0.3; ",
    },
    data: data,
  };
  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};

const postDataToCRMBigCityLife = async (d) => {
  const auth = () => {
    const url = `https://affiliate.overton.live/api/affiliate/generateauthtoken`;
    const data = {
      userName: "GLCNord",
      password: "Aa123456@",
    };
    const requestOptions = {
      method: "post",
      url: url,
      data: data,
      headers: {
        "Content-type": " Application/json",
      },
    };
    return axios(requestOptions)
      .then((res) => res.data.token)
      .catch((err) => err);
  };
  const token = await auth();

  const url = `https://affiliate.overton.live/api/aff/accounts`;
  const data = {
    FirstName: d.name,
    LastName: d.name,
    Phone: d.phone,
    Email: d.email,
    Country: d.geo,
    AffiliateId: "GLCNord",
    OwnerId: 575,
    CampaignId: "Amazon",
  };
  const requestOptions = {
    method: "post",
    url: url,
    data: data,
    headers: {
      AuthToken: token,
      "Content-type": " Application/json",
    },
  };

  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
const postDataToCrmLeadShot = (d) => {
  const url = `https://ls.leadshot.cc/api/signup/procform`;
  const data = JSON.stringify({
    ai: "2958036",
    ci: "1",
    gi: "21",
    userip: d.ip,
    firstname: d.name,
    lastname: d.name,
    email: d.email,
    password: "GlcTeam1!",
    phone: d.phone,
    so: d.land,
    sub: "FreeParam",
    MPC_1: d.id,
    MPC_2: "FreeParam",
    MPC_3: "FreeParam",
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
      "x-trackbox-username": "GlcTeam",
      "x-trackbox-password": "GlcTeam1!",
      "x-api-key": "2643889w34df345676ssdas323tgc738",
      "Content-Type": "application/json",
      "User-Agent": "WordPress/6.0.3; ",
    },
    data: data,
  };
  return axios(requestOptions)
    .then((res) => res)
    .catch((err) => err);
};
module.exports = {
  postDataToCrmAdscobar,
  postToCRMFranklin,
  postDataToCrmHellLeads,
  postDataToCrmTssuccess,
  postDataToCRMVikTeam,
  postToCRMTrafficSpace,
  postDataToCrmTraffDrive,
  postDataToCRMBigCityLife,
  postDataToCrmLeadShot,
};
