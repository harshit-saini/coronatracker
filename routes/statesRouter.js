const express = require("express");
const router = express.Router();
const axios = require("axios").default;

let allStatesData;

async function getIndiaData() {
  const config2 = {
    method: "GET",
    url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
    // `headers` are custom headers to be sent
    headers: {
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
      "x-rapidapi-key": "18b229f2a8mshb23a12aa878c3cep1f90f0jsncecb17e2091a",
    },
  };

  try {
    let res = await axios(config2);
    // console.log(res.data.countries_stat);
    allStatesData = res.data.state_wise;
    // console.log(allStatesData.state_wise);

    // console.log(india_data.country_name);
    // console.log(typeof india_data);
  } catch (error) {
    console.log(error);
  }
}

getIndiaData();

router.get("/", (req, res, next) => {
  res.render("states", { allStatesData });
});

module.exports = router;
