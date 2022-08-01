import { useState, useEffect } from "react";
import { Map, Marker, GeolocateControl, NavigationControl } from "react-map-gl";
import { setEnvironmentData } from "worker_threads";

const api = {
  key: "a637bc8ded805a3c49a86ab76bd20f34",
  base: "https://api.openweathermap.org/data/2.5/",
};

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2tpcm8iLCJhIjoiY2w1aTZjN2x2MDI3ODNkcHp0cnhuZzVicSJ9.HMjwHtHf_ttkh_aImSX-oQ";

const Ssrmap = () => {
  const [newPlace, setNewPlace] = useState<any | 0>(0);
  const [data, setData] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  const handleAddClick = async (e: any) => {
    console.log(e.lngLat);
    const { lng, lat } = e.lngLat;
    setNewPlace({
      lat,
      lng,
    });
    console.log(lng);

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lng}&units=metric&APPID=${api.key}`
    );
    const response = await api_call.json();
    console.log("response:", response);
    setData(response);
    console.log("data:", data);
  };

  const [newmapStyle, setMapStyle] = useState<string | null>(null);
  return (
    <div className="flex flex-wrap flex-col md:flex-col lg:flex-row w-1/3">
      <Map
        initialViewState={{
          latitude: 22.1957247,
          longitude: 77.7908816,
          zoom: 4,
        }}
        style={{ width: "50%", height: 850 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleAddClick}
      >
        {newPlace && (
          <Marker
            longitude={newPlace.lng}
            latitude={newPlace.lat}
            color="blue"
          />
        )}
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
      <div className="flex w-96">{/* <h1>Hello</h1> */}</div>
      <div className="text-center p-4 justify-center items-center w-2/3 lg:justify-end ">
        <h1>Place:{data?.name}</h1>
        <h1>Temperature: {data?.main?.temp}</h1>
        <h1>Humidity:{data?.main?.humidity}</h1>
        <form className="flex flex-col justify-center items-center w-2/4 h-[650px]">
          <label htmlFor="longitude">Longitude</label>

          <input
            className="inputForm"
            type="number"
            id="longitude"
            name="longitude"
            value={newPlace.lng}
            required
          />
          <label htmlFor="latitude">Latitude</label>
          <input
            className="inputForm"
            type="number"
            id="latitude"
            name="latitude"
            value={newPlace.lat}
            required
          />
          <label htmlFor="temperature">Temperature</label>

          <input
            className="inputForm"
            type="number"
            id="temperature"
            name="temperature"
            value={data?.main?.temp}
            required
          />

          <label htmlFor="humidity">Humidity</label>
          <input
            className="inputForml"
            type="number"
            id="humidity"
            name="humidity"
            value={data?.main?.humidity}
            required
          />
          <button
            className="bg-green-500 text-white cursor-pointer rounded-lg w-32 hover:bg-green-900 justify-center lg:h-12 md:h-8"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ssrmap;
