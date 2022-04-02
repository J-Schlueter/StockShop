
// const companyBio = document.querySelector("#company-bio") //target company bio paragraph
// function clickImg(e) {
    //create a fetch dynamically using the ticker of the stock that was clicked
    // fetch(`https://api.stockdata.org/v1/data/quote?symbols=${e.target.dataset.symbol}%2C&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ`)
    // .then(res => res.json())
    // .then(quote => renderQuote(quote.data))

    //takes API return object and updates page elements with quoted stock info
    // function renderQuote(stockAPI){
    //     const quoteTitle = document.querySelector(".company-name")
    //     const quoteTicker = document.querySelector(".company-ticker")
    //     const quotePrice = document.querySelector(".quote-price")
        

    //     quoteTitle.innerText = stockAPI[0].name
    //     quoteTicker.innerText = stockAPI[0].ticker
    //     quotePrice.innerText = stockAPI[0].price
    // }

//     //Updates placeholder img with the logo of the stock being quoted
//     const quoteIcon = document.querySelector(".quote-image")
//     quoteIcon.src = e.target.src

//     //seperate GET request to populate profile section
//     fetch(`https://api.stockdata.org/v1/entity/profile?symbols=${e.target.dataset.symbol}&api_token=8wL6E8iXNf1JvxVu9NoYPCeIVaZ7qJpgGCu46QdQ`)
//     .then(res => res.json())
//     .then(companyProfile => renderProfile(companyProfile.data))

//     function renderProfile(profile) {
//         const companyDescription = document.querySelector(".company-description")
//         companyDescription.innerText = profile[0].description //replace the inner text of the bio paragraph with the description from the API return data
//     }
// }


const searchBar = document.querySelector("#search-text") // target the stock icons
searchBar.addEventListener("click", (e) => getText(e)) // when an element is clicked in the stock menu run clickImg on it

function getText(e){
  console.log(e.data)
}


const axios = require("axios").default;
const APIkey = "tcUZGD3d6v56LzTep8gfe9N3YUNid1ea8W13NNwI"
let options = {
  method: 'GET',
  url: `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${e.target.data}`,
  headers: {
    'x-api-key': APIkey
  }
};
let getQuote = function(e) {
axios.request(options).then(function (response) {
	console.log(response.data);
    console.log(response.data.quoteResponse.result)
}).catch(function (error) {
	console.error(error);
});}
      