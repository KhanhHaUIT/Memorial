import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <section className="section-frame2 clearfix">
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
                        name="grname"
                        id="grname"
                        className="form-control"
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
                          name="namsinh"
                          id="namsinh"
                          data-select2-id="select2-data-namsinh"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value data-select2-id="select2-data-2-h1tg" />
                          <option value={1920}>1920</option>
                          <option value={1921}>1921</option>
                          <option value={1922}>1922</option>
                          <option value={1923}>1923</option>
                          <option value={1924}>1924</option>
                          <option value={1925}>1925</option>
                          <option value={1926}>1926</option>
                          <option value={1927}>1927</option>
                          <option value={1928}>1928</option>
                          <option value={1929}>1929</option>
                          <option value={1930}>1930</option>
                          <option value={1931}>1931</option>
                          <option value={1932}>1932</option>
                          <option value={1933}>1933</option>
                          <option value={1934}>1934</option>
                          <option value={1935}>1935</option>
                          <option value={1936}>1936</option>
                          <option value={1937}>1937</option>
                          <option value={1938}>1938</option>
                          <option value={1939}>1939</option>
                          <option value={1940}>1940</option>
                          <option value={1941}>1941</option>
                          <option value={1942}>1942</option>
                          <option value={1943}>1943</option>
                          <option value={1944}>1944</option>
                          <option value={1945}>1945</option>
                          <option value={1946}>1946</option>
                          <option value={1947}>1947</option>
                          <option value={1948}>1948</option>
                          <option value={1949}>1949</option>
                          <option value={1950}>1950</option>
                          <option value={1951}>1951</option>
                          <option value={1952}>1952</option>
                          <option value={1953}>1953</option>
                          <option value={1954}>1954</option>
                          <option value={1955}>1955</option>
                          <option value={1956}>1956</option>
                          <option value={1957}>1957</option>
                          <option value={1958}>1958</option>
                          <option value={1959}>1959</option>
                          <option value={1960}>1960</option>
                          <option value={1961}>1961</option>
                          <option value={1962}>1962</option>
                          <option value={1963}>1963</option>
                          <option value={1964}>1964</option>
                          <option value={1965}>1965</option>
                          <option value={1966}>1966</option>
                          <option value={1967}>1967</option>
                          <option value={1968}>1968</option>
                          <option value={1969}>1969</option>
                          <option value={1970}>1970</option>
                          <option value={1971}>1971</option>
                          <option value={1972}>1972</option>
                          <option value={1973}>1973</option>
                          <option value={1974}>1974</option>
                          <option value={1975}>1975</option>
                          <option value={1976}>1976</option>
                          <option value={1977}>1977</option>
                          <option value={1978}>1978</option>
                          <option value={1979}>1979</option>
                          <option value={1980}>1980</option>
                          <option value={1981}>1981</option>
                          <option value={1982}>1982</option>
                          <option value={1983}>1983</option>
                          <option value={1984}>1984</option>
                          <option value={1985}>1985</option>
                          <option value={1986}>1986</option>
                          <option value={1987}>1987</option>
                          <option value={1988}>1988</option>
                          <option value={1989}>1989</option>
                          <option value={1990}>1990</option>
                          <option value={1991}>1991</option>
                          <option value={1992}>1992</option>
                          <option value={1993}>1993</option>
                          <option value={1994}>1994</option>
                          <option value={1995}>1995</option>
                          <option value={1996}>1996</option>
                          <option value={1997}>1997</option>
                          <option value={1998}>1998</option>
                          <option value={1999}>1999</option>
                          <option value={2000}>2000</option>
                          <option value={2001}>2001</option>
                          <option value={2002}>2002</option>
                          <option value={2003}>2003</option>
                          <option value={2004}>2004</option>
                          <option value={2005}>2005</option>
                          <option value={2006}>2006</option>
                          <option value={2007}>2007</option>
                          <option value={2008}>2008</option>
                          <option value={2009}>2009</option>
                          <option value={2010}>2010</option>
                          <option value={2011}>2011</option>
                          <option value={2012}>2012</option>
                          <option value={2013}>2013</option>
                          <option value={2014}>2014</option>
                          <option value={2015}>2015</option>
                          <option value={2016}>2016</option>
                          <option value={2017}>2017</option>
                          <option value={2018}>2018</option>
                          <option value={2019}>2019</option>
                          <option value={2020}>2020</option>
                          <option value={2021}>2021</option>
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
                          name="nammat"
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
                        <div className="form-group">
                          <select
                            name="tinhthanh"
                            id="tinhthanh"
                            className="select2 select2-hidden-accessible"
                            data-select2-id="select2-data-tinhthanh"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option value data-select2-id="select2-data-7-aagn">
                              Chọn tỉnh thành
                            </option>
                            <option value={2}> Hà Nội</option>
                            <option value={3}> TP Hồ Chí Minh</option>
                            <option value={4}> Bình Dương</option>
                            <option value={5}> Đà Nẵng</option>
                            <option value={6}> Hải Phòng</option>
                            <option value={7}> Long An</option>
                            <option value={8}> Bà Rịa Vũng Tàu</option>
                            <option value={9}> An Giang</option>
                            <option value={10}> Bắc Giang</option>
                            <option value={11}> Bắc Kạn</option>
                            <option value={12}> Bạc Liêu</option>
                            <option value={13}> Bắc Ninh</option>
                            <option value={14}> Bến Tre</option>
                            <option value={15}> Bình Định</option>
                            <option value={16}> Bình Phước</option>
                            <option value={17}> Bình Thuận</option>
                            <option value={18}> Cà Mau</option>
                            <option value={19}> Cần Thơ</option>
                            <option value={20}> Cao Bằng</option>
                            <option value={21}> Đắk Lắk</option>
                            <option value={22}> Đắk Nông</option>
                            <option value={23}> Điện Biên</option>
                            <option value={24}> Đồng Nai</option>
                            <option value={25}> Đồng Tháp</option>
                            <option value={26}> Gia Lai</option>
                            <option value={27}> Hà Giang</option>
                            <option value={28}> Hà Nam</option>
                            <option value={29}> Hà Tĩnh</option>
                            <option value={30}> Hải Dương</option>
                            <option value={31}> Hậu Giang</option>
                            <option value={32}> Hòa Bình</option>
                            <option value={33}> Hưng Yên</option>
                            <option value={34}> Khánh Hòa</option>
                            <option value={35}> Kiên Giang</option>
                            <option value={36}> Kon Tum</option>
                            <option value={37}> Lai Châu</option>
                            <option value={38}> Lâm Đồng</option>
                            <option value={39}> Lạng Sơn</option>
                            <option value={40}> Lào Cai</option>
                            <option value={41}> Nam Định</option>
                            <option value={42}> Nghệ An</option>
                            <option value={43}> Ninh Bình</option>
                            <option value={44}> Ninh Thuận</option>
                            <option value={45}> Phú Thọ</option>
                            <option value={46}> Phú Yên</option>
                            <option value={47}> Quảng Bình</option>
                            <option value={48}> Quảng Nam</option>
                            <option value={49}> Quảng Ngãi</option>
                            <option value={50}> Quảng Ninh</option>
                            <option value={51}> Quảng Trị</option>
                            <option value={52}> Sóc Trăng</option>
                            <option value={53}> Sơn La</option>
                            <option value={54}> Tây Ninh</option>
                            <option value={55}> Thái Bình</option>
                            <option value={56}> Thái Nguyên</option>
                            <option value={57}> Thanh Hóa</option>
                            <option value={58}> Thừa Thiên Huế</option>
                            <option value={59}> Tiền Giang</option>
                            <option value={60}> Trà Vinh</option>
                            <option value={61}> Tuyên Quang</option>
                            <option value={62}> Vĩnh Long</option>
                            <option value={63}> Vĩnh Phúc</option>
                            <option value={64}> Yên Bái</option>
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
                        name="info"
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
                        name="fname"
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
                        name="mqh"
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
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        name="phone"
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
                      <button className="btn-default bg full btn_regiter">
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
