import React from "react";
import "./Navbar.css";
import User from "../../images/icons/user.png";
import Logo from "../../images/introduction-img.png";
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";
import { useTranslation } from "react-i18next";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  // Add more options as needed
];

const Navbar = () => {
  const [t, i18n] = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
    // Handle the selected option here
  };

  const avatarStyle = {
    backgroundImage: `url(${User})`,
  };

  return (
    <div>
      <div className="n-wrapper">
      <img src=""  width={200}  />

        <SearchBar options={options} onSelect={handleSelect} />

        <div className="left-row">
          <div onClick={changeLanguage} className="tr-box">
            {i18n.language === "en" ? <p>English</p> : <p>عربية</p>}
          </div>
          <Link to="/Profile-Managing">
            <div className="avatar-img" style={avatarStyle} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
