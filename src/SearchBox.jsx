import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./SearchBox.css";
import { useState } from "react";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "195097d2d3bb1ed8728dc169b2feec96";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        minTemp: jsonResponse.main.temp_min,
        maxTemp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            id="city"
            label="Place name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            className="searchInput"
            size="small"
          />
          <Box ml={1}>
            <Button variant="contained" type="submit">
              Search
            </Button>
          </Box>
        </Box>
        <br /><br />
        {error && <p style={{ color: "red" }}>No Data Available</p>}
      </form>
    </div>
  );
};

export default SearchBox;
