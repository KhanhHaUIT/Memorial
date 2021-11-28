import React from "react";
import "./Background.css";
import { useParams } from "react-router";

export default function Background() {
  const param = useParams();
  return (
    <>
      <section className="section-frame1 clearfix">
        <div className="container">
          <div className="content">
            <h1 className="title">Tưởng nhớ hơn 23.000 cuộc đời đã mất</h1>
            <div className="mb24">
              Gần hai năm kể từ khi xuất hiện, Covid đã cướp đi sinh mạng của
              hơn 23.000 người Việt. Hầu hết họ đã không thể ở bên người thân
              trong những giờ phút cuối. VnExpress thiết lập một không gian -
              nơi độc giả có thể chia buồn, tri ân, sẻ chia ký ức về những người
              đã mất.
            </div>
            <a
              className="btn-default bg tuong_nho"
              href="javascript:;"
              title="Gửi lời tưởng nhớ"
            >
              Gửi lời tưởng nhớ
            </a>
            {param.cardId ? (
              <></>
            ) : (
              <a
                className="btn-default bg tuong_nho"
                href="javascript:;"
                title="Gửi lời tưởng nhớ"
              >
                Gửi lời tưởng nhớ
              </a>
            )}
          </div>
          <a className="scroll_down v2 hidden-pc" href="javascript:;">
            <div className="scroll_down_btn">
              <span />
              <span />
              <span />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
