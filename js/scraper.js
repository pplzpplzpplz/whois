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
// ~~~~~~ this site will be deprecated June 3, 2022 !! ~~~~~~~
const url = 'https://spotifycharts.com/regional/us/weekly/latest';

const app = express();

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html);
    let allInfoArr = [];
    const songURLArr = [];
    const trackIDarr = [];
    const artistNameArr = [];
    const songNameArr = [];
    let songIDArray = [];
    let songURL;
    let songID;
    let artistName;
    let songName;

    // find songID, songURL
    $('.chart-table-image > a', html).each(function() {
      songURL = $(this).attr('href');
      songID = songURL.substring(31); //remove first part of URL leaving only trackID at end
      trackIDarr.push(songID)
      songURLArr.push(songURL)
    });

    // trackIDarr.shift();
    // songURLArr.shift();

    // find artist name
    // $('.chart-table-track > span', html).each(function() {
    //   artistName = $(this).text().trim().substring(3);
    //   artistNameArr.push(
    //     artistName
    //   )
    // });

    // find song name + artist
    $('.chart-table-track', html).each(function() {
      songAndArtistName = $(this).text().trim().replace(/\s+/g, " ");
      // console.log(songAndArtistName)
      songNameArr.push(
        songAndArtistName
      )
    });

    songNameArr.shift();

    let songIndex;

    // choose a random song from the top 200
    const randomSong = () => {
      const randomNumber = Math.floor(Math.random() * songURLArr.length);
      songIndex = randomNumber;
      return songIndex;
    }
    
    
    songURLArr.forEach((e, i) => {
      allInfoArr.push({
        // rank: i + 1,
        Song: songNameArr[i],
        URL: e,
        TrackID: trackIDarr[i]
      })
    })
    
    console.log(allInfoArr)
    randomSong();
    console.log(`
    ~~~~~the rAnDoM song chosen is ${JSON.stringify(allInfoArr[songIndex])}~~~~~
    `)




    // console.log('The random song is: \n' + songURLArr[songIndex], trackIDarr[songIndex], artistNameArr[songIndex], songNameArr[songIndex]);
    // console.log(artistNameArr)
    file.on('error', (err) => {
      /* error handling */
    });
    
    // songNameArr.shift();
    allInfoArr.forEach((e) => {
      e = JSON.stringify(e.Song) + ', ' + '\n';
      file.write(e);
    });
    
    console.log('text file generated')
    
    file.end();
  }).catch(err => {console.log(err)});
  

app.listen(PORT, () => {console.log(`server running on port ${PORT}`)});



