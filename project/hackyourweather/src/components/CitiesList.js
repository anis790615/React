import React from "react";
import City from "./City";

function CitiesList({ cities, deleteHandle }) {
  return (
    <>
      {cities.map((city, index) => {
        return <City city={city} key={index} deleteHandle={deleteHandle} />;
      })}
    </>
  );
}

export default CitiesList;
