import React from "react";
import "./Commemorate.css";
import Candle from "../../assets/candle.png";
export default function Commemorate() {
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
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

        <ul className="list-item d-flex justify-content-between align-items-center">
          <li>
            <div class="item">
              <h3 className="title">
                <a
                  href="https://vnexpress.net/ut-bich-1972-2021-4393713.html"
                  title="ABC"
                >
                  ABC
                </a>
              </h3>
              <div className="address">ABC</div>
              <div className="item-comment">
                <div className="content_less">
                  <p className="Normal">
                    Nghe tin Út Bích mất con bỗng bàng hoàng. Chính Út là người
                    động viên con khi con mất Út Sữa, 1 câu nói của Út hơn vạn
                    câu của những người khác an ủi con. Vậy mà con chưa kịp làm
                    gì để cảm ơn Út Bích thì Út đã đi rồi. Mong Út an nghỉ.
                  </p>
                </div>
              </div>
              <div className="item-username">
                <div> Hàng xóm cũ Sóc Trăng</div>
              </div>

              <div className="social cmt-show" cmt-show={1}>
                <a
                  className="item-like art-like-toggle usi_tl_4393713 usi_loaded"
                  href="javascript:;"
                  onclick="VNE.Comment_Ext.likeArticle(4393713)"
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
                    <strong className="num">74</strong>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/sharer.php?u=https://vnexpress.net/ut-bich-1972-2021-4393713.html"
                  className="face"
                ></a>
                <a
                  className="count_cmt comment"
                  href="https://vnexpress.net/ut-bich-1972-2021-4393713.html#box_comment_vne"
                  style={{ whiteSpace: "nowrap", display: "none" }}
                >
                  <span className="font_icon number widget-comment-4393713-1"></span>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <h3 className="title">
                <a
                  href="https://vnexpress.net/ut-bich-1972-2021-4393713.html"
                  title="ABC"
                >
                  ABC
                </a>
              </h3>
              <div className="address">ABC</div>
              <div className="item-comment">
                <div className="content_less">
                  <p className="Normal">middle</p>
                </div>
              </div>
              <div className="item-username">
                <div> Hàng xóm cũ Sóc Trăng</div>
              </div>

              <div className="social cmt-show" cmt-show={1}>
                <a
                  className="item-like art-like-toggle usi_tl_4393713 usi_loaded"
                  href="javascript:;"
                  onclick="VNE.Comment_Ext.likeArticle(4393713)"
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
                    <strong className="num">74</strong>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/sharer.php?u=https://vnexpress.net/ut-bich-1972-2021-4393713.html"
                  className="face"
                ></a>
                <a
                  className="count_cmt comment"
                  href="https://vnexpress.net/ut-bich-1972-2021-4393713.html#box_comment_vne"
                  style={{ whiteSpace: "nowrap", display: "none" }}
                >
                  <span className="font_icon number widget-comment-4393713-1"></span>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <h3 className="title">
                <a
                  href="https://vnexpress.net/ut-bich-1972-2021-4393713.html"
                  title="ABC"
                >
                  ABC
                </a>
              </h3>
              <div className="address">ABC</div>
              <div className="item-comment">
                <div className="content_less">
                  <p className="Normal">the end</p>
                </div>
              </div>
              <div className="item-username">
                <div> Hàng xóm cũ Sóc Trăng</div>
              </div>

              <div className="social cmt-show" cmt-show={1}>
                <a
                  className="item-like art-like-toggle usi_tl_4393713 usi_loaded"
                  href="javascript:;"
                  onclick="VNE.Comment_Ext.likeArticle(4393713)"
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
                    <strong className="num">74</strong>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/sharer.php?u=https://vnexpress.net/ut-bich-1972-2021-4393713.html"
                  className="face"
                ></a>
                <a
                  className="count_cmt comment"
                  href="https://vnexpress.net/ut-bich-1972-2021-4393713.html#box_comment_vne"
                  style={{ whiteSpace: "nowrap", display: "none" }}
                >
                  <span className="font_icon number widget-comment-4393713-1"></span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
