import React, { useState, useContext } from "react";
import "./Form.css";
import { provinces, districts } from "../../../constants";
import { MemorialContext } from "../../../contexts/MemorialContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Form() {
  const { addMemorial } = useContext(MemorialContext);

  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const history = useHistory();

  const [formData, setFormData] = useState({
    deceasedPersonName: "",
    senderName: "",
    birthYear: "",
    deathYear: "",
    province: "",
    district: "",
    remembranceWords: "",
    relationship: "",
    email: "",
    phone: "",
  });
  const [districtsByProvince, setDistrictsByProvince] = useState([]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "province") {
      const data = districts.filter((district) => {
        return (
          district.filter((item) => item.province === e.target.value).length > 0
        );
      });
      setDistrictsByProvince(data[0]);
    }
  };
  const handleSubmitForm = () => {
    if (!isAuthenticated) {
      alert("You need to login to continue");
      history.push("/login");
    } else {
      addMemorial(formData);
      setFormData({
        deceasedPersonName: "",
        senderName: "",
        birthYear: "",
        deathYear: "",
        province: "",
        district: "",
        remembranceWords: "",
        relationship: "",
        email: "",
        phone: "",
      });
    }
  };
  return (
    <section className="section-frame2 clearfix" id="tuong-nho">
      <div className="container">
        <div className="min-container form-gui thanks_form">
          <div className="tab-default line">
            <a className="active" href="#tab-tuong-nho">
              Tưởng nhớ
            </a>
            {/*<a href="#tab-chia-se">Chia sẻ</a>*/}
          </div>
          <div className="tab-content">
            <div id="tab-tuong-nho">
              <div className="form-default">
                <div className="grid grid__2 colum">
                  <div className="col-6">
                    <div className="form-group">
                      <label>
                        Tên người quá cố <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="deceasedPersonName"
                        id="grname"
                        className="form-control"
                        value={formData.deceasedPersonName}
                        onChange={handleChange}
                      />
                      <span
                        className="error"
                        id="er_grname"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="grid grid__2 year">
                      <div className="form-group">
                        <label>Năm sinh</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          name="birthYear"
                          value={formData.birthYear}
                          onChange={handleChange}
                          id="namsinh"
                          data-select2-id="select2-data-namsinh"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value data-select2-id="select2-data-2-h1tg" />
                          {Array(new Date().getFullYear() - 1920 + 1)
                            .fill(0)
                            .map((item, index) => {
                              return (
                                <option value={index + 1920}>
                                  {index + 1920}
                                </option>
                              );
                            })}
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-1-036w"
                          style={{ width: 120 }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-namsinh-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-namsinh-container"
                                role="textbox"
                                aria-readonly="true"
                              />
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                        <span
                          className="error"
                          id="er_namsinh"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Năm mất</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          name="deathYear"
                          value={formData.deathYear}
                          onChange={handleChange}
                          id="nammat"
                          data-select2-id="select2-data-nammat"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value data-select2-id="select2-data-4-wszk" />
                          <option value={2019}>2019</option>
                          <option value={2020}>2020</option>
                          <option value={2021}>2021</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-3-7hdf"
                          style={{ width: 120 }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-nammat-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-nammat-container"
                                role="textbox"
                                aria-readonly="true"
                              />
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                        <span
                          className="error"
                          id="er_nammat"
                          style={{ color: "red" }}
                        />
                      </div>
                    </div>
                    <div className="address">
                      <label className="lbl-title">Địa chỉ</label>
                      <div className="grid grid__2 ">
                        <div className="form-group d-flex">
                          <select
                            name="province"
                            onChange={handleChange}
                            value={formData.province}
                            id="tinhthanh"
                            className="select2 select2-hidden-accessible"
                            data-select2-id="select2-data-tinhthanh"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option value data-select2-id="select2-data-7-aagn">
                              Chọn tỉnh thành
                            </option>

                            {provinces.map((province, index) => {
                              return (
                                <option key={index} value={province}>
                                  {province}
                                </option>
                              );
                            })}
                          </select>
                          <select
                            name="district"
                            onChange={handleChange}
                            value={formData.district}
                            className="select2 select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                            style={{marginLeft: '20px'}}
                          >
                            <option>Chọn quận huyện</option>
                            {districtsByProvince.length > 0 &&
                              districtsByProvince.map((district, index) => {
                                return (
                                  <option key={index} value={district.name}>
                                    {district.name}
                                  </option>
                                );
                              })}
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="select2-data-5-pbjs"
                            style={{ width: 193 }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-tinhthanh-container"
                              >
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation" />
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            />
                          </span>
                          <span
                            className="error"
                            id="er_tinhthanh"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Lời tưởng nhớ <sup>*</sup>
                      </label>
                      <textarea
                        className="form-control"
                        name="remembranceWords"
                        value={formData.remembranceWords}
                        onChange={handleChange}
                        id="info"
                        rows={4}
                        style={{ height: 118 }}
                        defaultValue={""}
                      />
                      <span
                        className="error"
                        id="er_info"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>
                        Tên người gửi <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        id="fname"
                        className="form-control"
                      />
                      <span
                        className="error"
                        id="er_fname"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mối quan hệ với người quá cố</label>
                      <input
                        type="text"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        id="mqh"
                        className="form-control"
                      />
                      <span
                        className="error"
                        id="er_mqh"
                        style={{ color: "red" }}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Email <sup>*</sup>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        className="form-control"
                      />
                      <span
                        className="error"
                        id="er_email"
                        style={{ color: "red" }}
                      />
                      <div className="note">
                        Thông tin được bảo mật, không hiển thị trên trang
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại</label>
                      <input
                        type="tel"
                        onKeyPress="return event.charCode >= 48 && event.charCode <= 57"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        id="phone"
                        className="form-control"
                      />
                      <span
                        className="error"
                        id="er_phone"
                        style={{ color: "red" }}
                      />
                      <div className="note">
                        Thông tin được bảo mật, không hiển thị trên trang
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="mt40">
                      <button
                        className="btn-default bg full btn_regiter"
                        onClick={handleSubmitForm}
                      >
                        Gửi
                      </button>
                      <a className="dk popup-quydinh" href="#popup-quydinh">
                        Điều khoản miễn trừ trách nhiệm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
