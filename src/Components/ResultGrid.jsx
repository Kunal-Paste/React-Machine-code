import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaAPI";

const ResultGrid = () => {
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      async function getData() {
        let data;

        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results;
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos;
        }

        console.log(data);
      }

      getData();
    },
    [query, activeTab],
  );

  return (
    <div>
      <button className="bg-orange-500">Get data</button>
    </div>
  );
};

export default ResultGrid;
