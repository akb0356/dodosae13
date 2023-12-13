import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const menuList = ["여성", "남성", "아동", "악세사리", "Home", "SALE", "Brand"];

const Navebar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  const gotoLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="nav-header">
        <div className="burger-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={gotoLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
            width={200}
          />
        </Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
      </div>
    </div>
  );
};

export default Navebar;
