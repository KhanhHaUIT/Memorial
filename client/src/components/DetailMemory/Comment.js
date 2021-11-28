import React, { memo, useEffect, useContext } from "react";
import { MemorialContext } from "../../contexts/MemorialContext";


const Comment = () => {

  const {
    commentState: { comments },
    getComments,
    memorialState: { memorial }
    
  } = useContext(MemorialContext);
  
  useEffect(() => {
    
    if(memorial){
        getComments({memorialId: memorial._id});
    }
  }, [memorial]);
  console.log(comments);
  return (
    <>
      {comments?.map((comment) => (
        <div className="comment_item width_common">
          <div className="user_status" data-user-type={5}>
            <div className="info_avata_cmt">
              <a
                href="https://my.vnexpress.net/users/feed/1073803999"
                className="avata_coment"
                target="_blank"
              >
                <img
                  src="https://s1.vnecdn.net/myvne/i/v1/graphics/img_60x60.gif"
                  alt="Thảo Phạm"
                />
              </a>
              <div className="author-infor-parent">
                <p className="author-info">
                  <a
                    href="https://my.vnexpress.net/users/feed/1073803999"
                    target="_blank"
                    className
                  >
                    <strong>{comment?.senderId.username}</strong>
                  </a>
                  <span className="txt_author">
                    <span className="count-yk">1 ý kiến</span>
                  </span>
                </p>
                <p className="recent-com">
                  <a href="https://vnexpress.net/vo-thi-chung-1932-2021-4394395.html?commentid=43166942">
                    {comment?.message}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="sub_comment width_common clearfix" />
        </div>
      ))}
    </>
  );
};

export default memo(Comment);
