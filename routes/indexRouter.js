const express = require("express");
const axios = require("axios").default;
const chartjs = require("chart.js");

const router = express.Router();

let india_data;

async function getData() {
  const config = {
    method: "GET",
    url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
    // `headers` are custom headers to be sent
    headers: {
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
      "x-rapidapi-key": "18b229f2a8mshb23a12aa878c3cep1f90f0jsncecb17e2091a",
    },
  };

  try {
    let res = await axios(config);
    // console.log(res.data.countries_stat);
    let allCountriesData = res.data.countries_stat;
    india_data = allCountriesData.find(
      (country) => country.country_name === "India"
    );
    // console.log(india_data.country_name);
    // console.log(typeof india_data);
  } catch (error) {
    console.log(error);
  }
}

getData();

//

//

router.get("/", (req, res, next) => {
  res.render("index", {
    india_data,
    // allStatesData
  });
});

// router.get("/api", (req, res, next) => {
//   console.log(typeof allStatesData);
//   res.json({
//     allStatesData: "hello"
//   });
// });

module.exports = router;
