import "./Map.css";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import Inputmarker from "./Marker";
import Input from "./Input";

const Map = () => {
  const egypt_viewport = {
    width: 500,
    height: 500,
    latitude: 27.36267226250322,
    longitude: 31.083155318445538,
    zoom: 4.6118084361148055,
  };
  const [list, setList] = useState([]);
  const [viewport, setViewport] = useState(egypt_viewport);
  const points = [...list];

  const updatecoordinates = (id, lat, lon) => {
    points.forEach((coordinate) => {
      if (coordinate.id === id) {
        coordinate.lat = lat;
        coordinate.long = lon;
        setList(points);
      }
    });
  };

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport);
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiYXNvbHltYSIsImEiOiJja3R5aWI3OWExZWlyMm5teHMwdWFxdnAwIn0.LsFWvyO7VXrl9iW5IEFzOg"
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
        {list.map((coord) => {
          return (
            <Inputmarker
              key={coord.id}
              coordinates={coord}
              setcoordinates={updatecoordinates}
            />
          );
        })}
      </ReactMapGL>
      <Input list={list} setList={setList} />
    </div>
  );
};

export default Map;
