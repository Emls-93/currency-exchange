const axios = require('axios')
const url = "http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
let fromcurrency = "USD"; // us Dollars
let tocurrency = "BRL" // BRL Real Brasileiro
let amountToconvert = '1';
// AwesomeApi eur-brl/valor 
let awesomeApiResponse = axios.get(url).then(res => res.data)
setTimeout(()=>{
    console.log(awesomeApiResponse, Date.now())
 
},6000)no