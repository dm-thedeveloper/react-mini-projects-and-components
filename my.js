// Country Detail app

// * https://restcountries.com/v3.1/all                           /// all detail in one link
// * https://restcountries.com/v3.1/name/india/?fullText=true        /// detail with name


function Fetch(CountryName) {

const data = fetch(`https://restcountries.com/v3.1/name/${CountryName}/?fullText=true`);

console.log(data);

}
Fetch(india)
console.log("hello");