// const constant = {
//   baseurl: `http://localhost:5000/`,
//   // baseurl: `http://192.168.1.7:5000/`,
//   // baseurl: `https://expressapi.freelifehousing.com/`,
// };

// export default constant;

// const hostname = window.location.hostname;
// const baseurl =
//   hostname === "localhost"
//     ? "http://localhost:5000/"
//     : "https://expressapi.freelifehousing.com/";

// const constant = {
//   baseurl: baseurl,
// };

// export default constant;

require("dotenv").config();

const baseurl =
  process.env.DB_HOST === "localhost"
    ? "http://localhost:5000/"
    : "https://expressapi.freelifehousing.com/";

console.log("baseurl----", process.env.DB_HOST);

const constant = {
  baseurl: baseurl,
};

export default constant;
