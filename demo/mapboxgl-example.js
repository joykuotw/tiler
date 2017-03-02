
var vectortiles = "UK";
var PORT = "8080";
var HOST = "http://127.0.0.1";
var url = HOST + ":"+ PORT + "/tiler/tiler-data/tiles/" + vectortiles + "/{z}/{x}/{y}.pbf";
console.log(url);

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNtaWxuZXIiLCJhIjoiY2lsMm96djd1MDBjYndnbTVmajAxeHByaiJ9.mw4lltZ8qZjJHaJwbnN5Yw';

var simple = {
    "version": 8,
    "sources": {
        "uk": {
            "type": "vector",
            "tiles": [url],
            "maxzoom": 9
        }
    },
    "layers": [
        {
            "id": "UKgeojson",
            "type": "fill",
            "source": "uk",
            "source-layer": "UKgeojson",
            "filter": ["==", "$type", "Polygon"],
            "paint": {
                "fill-color": "rgba(0,255,210, 0.5)",
                // "line-color": "rgba(0,0,0, 0.1)"
            }
        }
    ]
};

var map = new mapboxgl.Map({
    container: 'map',
    style: simple,
    zoom: 5,
    center: [-0.5, 51.0]
});

map.addControl(new mapboxgl.NavigationControl());