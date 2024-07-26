"use client";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/photos");
      data = await data.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((p) => (
        <>
          <img key={p} src={Object.values(p)[4]} />
          <li key={p.id}>{p.title}</li>
        </>
      ))}
    </div>
  );
};

export default Data;
