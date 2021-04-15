import React, { useState } from "react";



const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  return (
    <div className="container">
      <div className="search_wrap search_wrap_5">
        <div className="search_box">
          <input
            type="text"
            className="input"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          {shouldDisplayButton && (
            <div className="btn" onClick={handleClearClick}>
              <p>Clear</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
