import React, { useContext, useEffect } from "react";
import "./Commemorate.css";
import Candle from "../../assets/candle.png";
import { MemorialContext } from "../../contexts/MemorialContext";
import { Link } from "react-router-dom";

export default function Commemorate() {
  const {
    memorialState: { memorials },
    getMemorials,
  } = useContext(MemorialContext);



  useEffect(() => {
    getMemorials();
  }, []);

  return (
    <section className="section-frame2 clearfix">
      <div className="container list-comment">
        <h2 className="title-cate txt_34 color-main">Tưởng nhớ</h2>
        <div className="box-search">
          <div className="search search-vne" id="formSearchHeader">
            <input
              id="searchQuery"
              type="text"
              name="q"
              placeholder="Tìm kiếm theo tên"
              autoComplete="off"
            />

            <button
              type="submit"
              title="Tìm kiếm"
              className="btn-search-vne"
              id="searchForum"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        <ul className="list-item d-flex justify-content-between align-items-center">
          {memorials.length > 0 &&
            memorials.map((memorial, index) => (
              <li key={index}>
                <div class="item">
                  <h3 className="title">
                   <Link to={`/${memorial._id}`} title="ABC"> 
                      {memorial?.deceasedPersonName}
                    </Link>
                  </h3>
                  <div className="address">
                    {memorial?.district}, {memorial?.province}
                  </div>
                  <div className="item-comment">
                    <div className="content_less">
                      <p className="Normal">{memorial?.remembranceWords}</p>
                    </div>
                  </div>
                  <p>{memorial?.relationship}</p>
                  <div className="item-username">
                    <div> {memorial?.senderName}</div>
                  </div>

                  <div className="social cmt-show" cmt-show={1}>
                    <a
                      className="item-like art-like-toggle usi_tl_4393713 usi_loaded"
                      href="/"
                      onClick="VNE.Comment_Ext.likeArticle(4393713)"
                      data-aid={4393713}
                      data-type={1}
                      title="Thắp nến"
                      data-total={74}
                    >
                      <div className="icon">
                        <img src={Candle} alt="anh" />
                      </div>
                      <div className="text">
                        Thắp nến
                        {" "}
                        <strong className="num">{Math.floor(Math.random() * 100)}</strong>
                      </div>
                    </a>
                    <a href="/" className="face"></a>
                    <a
                      className="count_cmt comment"
                      href="/"
                      style={{ whiteSpace: "nowrap", display: "none" }}
                    >
                      <span className="font_icon number widget-comment-4393713-1"></span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
