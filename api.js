// const wait = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Hello");
//   });
// };
// wait().then((result) => {
//   console.log(result.split(""));
// });

const { json } = require("stream/consumers");

const getData = fetch("https://rickandmortyapi.com/api/character");
console.log(getData);

getData.then((results) => {
  console.log(results);
});
