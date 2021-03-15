import React, { useState, useEffect } from "react";
import Axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("Nagpur");
  const [result, setResult] = useState(null);

  

   

  useEffect(() => {   
    const fetchWeather = async () => {
      const apiKey = "24ec548c5e4f1eb5b752e31a61d8a4a5";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const res = await fetch(url)
        .then((res) => {
          res.json()
            .then((data) => {
              console.log(data.main)
              setResult(data.main)
            })
          
        }
        
      )
        .catch(error => {
        console.log(error.message)
      })
      
  
    }; 
    fetchWeather();
  }, [city]);



  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto heading">
          <h1 className="text-center text-white">Weather API</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto mt-5 inputForm">
          {/* <form onSubmit={submitForm} className="m-1 p-3"> */}
            <div className="input-group p-2">
              <input
                type="search"
              onChange={(e) => setCity(e.target.value)}
              value={city}
                className="form-control"
                placeholder="Enter a city..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              {/* <button className="btn btn-primary" type="submit" id="button-addon2">Search</button> */}
            </div>
          {/* </form> */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto mt-3 info">
          {!result ? (
            <p className="text-center display-5 fw-bold py-3">No data Found</p>
          ) : (
            <>
              <h1 className="text-center display-1 fw-bold">
                <i className="fa fa-compass me-4"></i>
                {city}
              </h1>
              <h2 className="text-center display-2 fw-bold mt-4">
                {result.temp} c
              </h2>
              <h3 className="text-center display-5 fw-bold mt3">
                {/* {result.weather[0]} */}
              </h3>
              <h4 className="text-center display-6 fw-bold mt-4">
                max: {result.temp_max} c | min: {result.temp_min} c
              </h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Weather;
