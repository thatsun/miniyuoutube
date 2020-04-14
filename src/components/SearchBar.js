import React, { useState } from "react";


export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <div className="searchbar">
      <input
        className="inputbox"
        placeholder="Search..."
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}