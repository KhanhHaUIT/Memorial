import React, { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  return (
    <>
      <section className="wrap-main-nav" id="wrap-main-nav">
        <div className="wrap flex">
          <div className="left-head">
            <a  className="logo-vne" title="VnExpress">
              <img
                src="https://s1.vnecdn.net/vnexpress/restruct/j/v2623/event/tnnncovid/images/graphics/VnExpress-white.svg"
                alt="VnExpress"
              />
            </a>
          </div>

          <h1 className="title">
            <Link to="/" title="Tưởng nhớ hơn 23.000 cuộc đời đã mất" className="btn-default tuong_nho">
            Tưởng nhớ hơn 23.000 cuộc đời đã mất
            </Link>
          </h1>
          <div className="right-head">
            <a
              className="btn-default tuong_nho"
              href="#tuong-nho"
              title="Gửi lời tưởng nhớ"
            >
              Gửi lời tưởng nhớ
            </a>
            <a
              href="javascript:;"
              id="vibeji-ham"
              className="item"
              onClick={() => setOpenMobile(!openMobile)}
            >
              <span /> <span /> <span />
            </a>
          </div>
        </div>
      </section>
      <div className={openMobile ? "topnav-mobile open " : "topnav-mobile "}>
        <ul className="menu">
          <li className="active">
            <Link to="/" title="Trang chủ">
              Trang chủ
            </Link>
          </li>
          <li>
            
            <a href="#tuong-nho">
            Tưởng nhớ
            </a>
          </li>
        </ul>
        <div className="fix-button">
          <div className="mb24" onClick={() => setOpenMobile(!openMobile)}>
            {isAuthenticated ? (
              <>
                <Link
                  className="btn-default bg tuong_nho_menu"
                  to="/dashboard"
                  style={{ fontSize: 16 }}
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn-default bg tuong_nho_menu"
                  to="/login"
                  style={{ fontSize: 16 }}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
