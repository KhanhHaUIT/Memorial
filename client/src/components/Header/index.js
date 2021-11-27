import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <section className="wrap-main-nav" id="wrap-main-nav">
        <div className="wrap flex">
          <div className="left-head">
            <a href="/" className="logo-vne" title="VnExpress">
              <img
                src="https://s1.vnecdn.net/vnexpress/restruct/j/v2623/event/tnnncovid/images/graphics/VnExpress-white.svg"
                alt="VnExpress"
              />
            </a>
            <a href="/" className="back-vne" title="VnExpress">
              <span>Trở về VnExpress</span>
            </a>
          </div>

          <h1 className="title">
            <a
              className="btn-default tuong_nho"
              href="/thoi-su/tuong-nho-nan-nhan-covid-19"
              title="Tưởng nhớ hơn 23.000 cuộc đời đã mất"
            >
              Tưởng nhớ hơn 23.000 cuộc đời đã mất
            </a>
          </h1>
          <div className="right-head">
            <a
              className="btn-default tuong_nho"
              href="#tuong-nho"
              title="Gửi lời tưởng nhớ"
            >
              Gửi lời tưởng nhớ
            </a>
            {/* <div className="social">
              <a
                href="facebook.com"
                className="face fb_share"
                data-type="fb_share"
                rel="nofollow"
                title="Facebook"
              >
                <svg className="ic ic-facebook">
                  <use xlinkHref="#Facebook" />
                </svg>
              </a>
              <a
                href="twitter.com"
                className="twitter tw_share"
                data-type="tw_share"
                title="Twitter"
              >
                <svg className="ic ic-twitter">
                  <use xlinkHref="#Twitter" />
                </svg>
              </a>
              <a href="javascript:;" id="vibeji-ham" className="item">
                <span /> <span /> <span />
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
