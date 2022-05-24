// to run, use 'npm run start 2' in terminal

const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
// ///////////////////////
const fs = require('fs');

const file = fs.createWriteStream('array.txt');
// ///////////////////////

// top 200 spotify songs in US
// ~~~~~~ this site will be deprecated June 3, 2022 !! ~~~~~~~
const url = 'https://open.spotify.com/embed/track/2G2YzndIA6jeWFPBXhUjh5?utm_source=generator';

const app = express();

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html);
    let allInfoArr = [];

    // find script with ID resource
    let resourceInside =  $('#resource', html);
    let resourceInsideText = resourceInside[0].children[0].data.trim();

    // the final SONG INFO JSON response from the API
    let decodedText = decodeURIComponent(resourceInsideText);
    let jsonObject = JSON.parse(decodedText);
    
    // THE PREVIEW URL OF THE SONG! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    console.log(jsonObject.preview_url);

    // console.log(decodedText);


    

    file.on('error', (err) => {
      /* error handling */
    });
    

    
    file.end();
  }).catch(err => {console.log(err)});
  

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)});



