import React, { useContext, memo } from "react";
import { MemorialContext } from "../../contexts/MemorialContext";
import "./DetailMemory.css";
import shuffle from "../../utils/shuffle";
import Candle from "../../assets/candle.png";
import { Link } from "react-router-dom";

const ViewMoreMemorial = () => {
  const {
    memorialState: { memorials },
  } = useContext(MemorialContext);
  console.log('re-render')
  return (
    <div className="sidebar-2">
      <div className="box-category list-comment">
        <h2 className="title-cate">Xem thêm</h2>
        <ul className="list-item">
          {memorials &&
            shuffle(memorials)
              .slice(0, 3)
              .map((item, index) => (
                <li>
                  <div class="item">
                    <h3 className="title">
                      <Link to={`/${item._id}`} title="ABC">
                        {item?.deceasedPersonName} ({item?.birthYear} -{" "}
                        {item?.deathYear})
                      </Link>
                    </h3>
                    <div className="address">
                      {item?.district}, {item?.province}
                    </div>
                    <div className="item-comment">
                      <div className="content_less">
                        <p className="Normal">{item?.remembranceWords}</p>
                      </div>
                    </div>
                    <p>{item?.relationship}</p>
                    <div className="item-username">
                      <div>{item?.senderName}</div>
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
                          <strong className="num">83</strong>
                        </div>
                      </a>
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
    </div>
  );
};

export default memo(ViewMoreMemorial);
