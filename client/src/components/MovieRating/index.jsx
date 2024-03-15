import React, { useState, useEffect } from "react";

const base_url = process.env.REACT_APP_API_URL;

function MovieRatingSelector({
  minRating,
  maxRating,
  setMaxRating,
  setMinRating,
  setQueryString,
  queryString,
}) {
  // const [minRating, setMinRating] = useState(0);
  // const [maxRating, setMaxRating] = useState(10);
  // const [queryString, setQueryString] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("min", minRating);
    params.append("max", maxRating);
    setQueryString(params.toString());
  }, [minRating, maxRating, setQueryString]);

  const handleMinRatingChange = (event) => {
    setMinRating(parseInt(event.target.value));
  };

  const handleMaxRatingChange = (event) => {
    setMaxRating(parseInt(event.target.value));
  };

  return (
    <div>
      <h2>Select movies based on Rating</h2>
      <div>
        <label htmlFor="minRating">Min Rating:</label>
        <input
          type="range"
          id="minRating"
          name="minRating"
          min="0"
          max="10"
          value={minRating}
          onChange={handleMinRatingChange}
        />
        <span>{minRating}</span>
      </div>
      <div>
        <label htmlFor="maxRating">Max Rating:</label>
        <input
          type="range"
          id="maxRating"
          name="maxRating"
          min="0"
          max="10"
          value={maxRating}
          onChange={handleMaxRatingChange}
        />
        <span>{maxRating}</span>
      </div>
      <p>URL Query String: {queryString}</p>
      {/* <a href={`${base_url}?${queryString}`}>Search Movies</a> */}
    </div>
  );
}

export default MovieRatingSelector;
