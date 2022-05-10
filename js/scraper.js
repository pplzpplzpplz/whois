// to run, use 'npm run start' in terminal

const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
// ///////////////////////
const fs = require('fs');

const file = fs.createWriteStream('array.txt');
// ///////////////////////

// top 200 spotify songs in US
const url = 'https://spotifycharts.com/regional/us/weekly/latest';

const app = express();

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html);
    const songURLArr = [];
    const trackIDarr = [];
    const artistNameArr = [];
    const songNameArr = [];
    let songURL;
    let songID;
    let artistName;
    let songName;

    // find songID
    $('.chart-table-image > a', html).each(function() {
      songURL = $(this).attr('href');
      songID = songURL.substring(31); //remove first part of URL leaving only trackID at end
      trackIDarr.push(
        songID
      )
      songURLArr.push(songURL)
    });

    // find artist name
    $('.chart-table-track > span', html).each(function() {
      artistName = $(this).text().trim().substring(3);
      artistNameArr.push(
        artistName
      )
    });

    // find song name
    $('.chart-table-track *:first-child', html).each(function() {
      songName = $(this).text().trim();
      songNameArr.push(
        songName
      )
    });

    let songIndex;

    // choose a random song from the top 200
    const randomSong = () => {
      const randomNumber = Math.floor(Math.random() * songURLArr.length);
      songIndex = randomNumber;
      return songIndex;
    }
    randomSong();

    // console.log('The random song is: \n' + songURLArr[songIndex], trackIDarr[songIndex], artistNameArr[songIndex], songNameArr[songIndex]);
    // console.log(artistNameArr)
    file.on('error', (err) => {
      /* error handling */
    });
    
    artistNameArr.forEach((e) => {
      var newE = e + ', ' + '\n';
      file.write(newE);
    });
    
    console.log('text file generated')
    
    file.end();
  }).catch(err => {console.log(err)});
  

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)});



