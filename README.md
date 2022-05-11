# whois

in the iframe html there is this at the bottom (has mp3 link)

    <script id="resource" type="application/json">
        %7B%22album%22%3A%7B%22album_type%22%3A%22single%22%2C%22artists%22%3A%5B%7B%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Fartist%2F6KImCVD70vtIoJWnq6nGn3%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2F6KImCVD70vtIoJWnq6nGn3%22%2C%22id%22%3A%226KImCVD70vtIoJWnq6nGn3%22%2C%22name%22%3A%22Harry%20Styles%22%2C%22type%22%3A%22artist%22%2C%22uri%22%3A%22spotify%3Aartist%3A6KImCVD70vtIoJWnq6nGn3%22%7D%5D%2C%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Falbum%2F2pqdSWeJVsXAhHFuVLzuA8%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Falbums%2F2pqdSWeJVsXAhHFuVLzuA8%22%2C%22id%22%3A%222pqdSWeJVsXAhHFuVLzuA8%22%2C%22images%22%3A%5B%7B%22height%22%3A640%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273b46f74097655d7f353caab14%22%2C%22width%22%3A640%7D%2C%7B%22height%22%3A300%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e02b46f74097655d7f353caab14%22%2C%22width%22%3A300%7D%2C%7B%22height%22%3A64%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00004851b46f74097655d7f353caab14%22%2C%22width%22%3A64%7D%5D%2C%22name%22%3A%22As%20It%20Was%22%2C%22release_date%22%3A%222022-03-31%22%2C%22release_date_precision%22%3A%22day%22%2C%22total_tracks%22%3A1%2C%22type%22%3A%22album%22%2C%22uri%22%3A%22spotify%3Aalbum%3A2pqdSWeJVsXAhHFuVLzuA8%22%7D%2C%22artists%22%3A%5B%7B%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Fartist%2F6KImCVD70vtIoJWnq6nGn3%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2F6KImCVD70vtIoJWnq6nGn3%22%2C%22id%22%3A%226KImCVD70vtIoJWnq6nGn3%22%2C%22name%22%3A%22Harry%20Styles%22%2C%22type%22%3A%22artist%22%2C%22uri%22%3A%22spotify%3Aartist%3A6KImCVD70vtIoJWnq6nGn3%22%7D%5D%2C%22disc_number%22%3A1%2C%22duration_ms%22%3A167303%2C%22explicit%22%3Afalse%2C%22external_ids%22%3A%7B%22isrc%22%3A%22USSM12200612%22%7D%2C%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Ftrack%2F4LRPiXqCikLlN15c3yImP7%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Ftracks%2F4LRPiXqCikLlN15c3yImP7%22%2C%22id%22%3A%224LRPiXqCikLlN15c3yImP7%22%2C%22is_local%22%3Afalse%2C%22is_playable%22%3Atrue%2C%22name%22%3A%22As%20It%20Was%22%2C%22popularity%22%3A100%2C%22preview_url%22%3A%22https%3A%2F%2Fp.scdn.co%2Fmp3-preview%2Fe9216304e6456a9015ac2054692fd4f0135d8aa9%3Fcid%3Da46f5c5745a14fbf826186da8da5ecc3%22%2C%22track_number%22%3A1%2C%22type%22%3A%22track%22%2C%22uri%22%3A%22spotify%3Atrack%3A4LRPiXqCikLlN15c3yImP7%22%2C%22dominantColor%22%3A%22%23703030%22%7D
    </script>
    
decoded it into this 
(https://meyerweb.com/eric/tools/dencoder/)

```
{"album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"},"href":"https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3","id":"6KImCVD70vtIoJWnq6nGn3","name":"Harry Styles","type":"artist","uri":"spotify:artist:6KImCVD70vtIoJWnq6nGn3"}],"external_urls":{"spotify":"https://open.spotify.com/album/2pqdSWeJVsXAhHFuVLzuA8"},"href":"https://api.spotify.com/v1/albums/2pqdSWeJVsXAhHFuVLzuA8","id":"2pqdSWeJVsXAhHFuVLzuA8","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02b46f74097655d7f353caab14","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851b46f74097655d7f353caab14","width":64}],"name":"As It Was","release_date":"2022-03-31","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:2pqdSWeJVsXAhHFuVLzuA8"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"},"href":"https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3","id":"6KImCVD70vtIoJWnq6nGn3","name":"Harry Styles","type":"artist","uri":"spotify:artist:6KImCVD70vtIoJWnq6nGn3"}],"disc_number":1,"duration_ms":167303,"explicit":false,"external_ids":{"isrc":"USSM12200612"},"external_urls":{"spotify":"https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7"},"href":"https://api.spotify.com/v1/tracks/4LRPiXqCikLlN15c3yImP7","id":"4LRPiXqCikLlN15c3yImP7","is_local":false,"is_playable":true,"name":"As It Was","popularity":100,"preview_url":"https://p.scdn.co/mp3-preview/e9216304e6456a9015ac2054692fd4f0135d8aa9?cid=a46f5c5745a14fbf826186da8da5ecc3","track_number":1,"type":"track","uri":"spotify:track:4LRPiXqCikLlN15c3yImP7","dominantColor":"#703030"}
```

 mp3 preview link is in the above:
```
https://p.scdn.co/mp3-preview/e9216304e6456a9015ac2054692fd4f0135d8aa9?cid=a46f5c5745a14fbf826186da8da5ecc3
```
