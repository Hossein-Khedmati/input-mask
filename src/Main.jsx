import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, setHint, value, setValue }) => {
  const [data, setData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  // this useEffect is for fetching Cties data
  useEffect(() => {
    fetch("./cities.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch data error:", err));
  }, []);
  // this useEffect is for setting input hint
  useEffect(() => {
    if (data && value) {
      const found = data.find((city) => city.startsWith(value));
      setHint(found || "");
    } else {
      setHint("Enter your city name");
    }
  }, [data, value]);

  // this useEffect is for showing 5 suggestions
  useEffect(() => {
    if (data && value) {
      const matches = data.filter((city) => city.startsWith(value)).slice(0, 5);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [data, value]);

  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && hint) {
            e.preventDefault();
            setValue(hint);
          }
        }}
      />
      <ul className="suggestions-list">
        {suggestions.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
