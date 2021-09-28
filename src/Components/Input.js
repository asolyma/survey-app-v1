import React, { useState } from "react";
import { v4 } from "uuid";
import SurveyedPoint from "./SurveyedPoint";

let Store = [];
const Input = ({ list, setList }) => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  return (
    <div className="viewport">
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        name="lat"
        id="input__lat"
        placeholder="enter lat"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <label htmlFor="long">Longitude</label>
      <input
        type="number"
        name="long"
        id="input__long"
        placeholder="enter long"
        value={long}
        onChange={(e) => setLong(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          Store.push({ id: v4(), lat: lat, long: long });
          setList([...Store]);
          setLong("");
          setLat("");
        }}
      >
        ADD to Map
      </button>
      <div className="input__points">
        {list.map((e) => {
          return <SurveyedPoint list={list} key={e.id} point={e} />;
        })}
      </div>
    </div>
  );
};

export default Input;
