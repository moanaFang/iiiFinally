import React from 'react'

function Profile() {
    return(
        <>
            <div className="member_admin layout_container_bg_moana">
                <div className="member_admin_nav_moana">
                    <div className="user_avatar_wrapper_moana">
                        <div className="img_circle_moana img_sm_circle_moana"></div>
                        <div className="text_user_moana">
                        <p>Hi,</p>
                        <p className="username_moana">我的暱稱總共9個字</p>
                        </div>
                    </div>
                    <ul className="member_admin_list_moana">
                        <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>user-check</title>
                            <path d="M30 19l-9 9-3-3-2 2 5 5 11-11z"></path>
                            <path d="M14 24h10v-3.598c-2.101-1.225-4.885-2.066-8-2.321v-1.649c2.203-1.242 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h14v-2z"></path>
                        </svg>
                        <a href="#">個人檔案</a>
                        </li>
                        <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>key</title>
                            <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                        </svg>
                        <a href="#">帳號密碼</a>
                        </li>
                        <li>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>bullhorn</title>
                            <path d="M32 13.414c0-6.279-1.837-11.373-4.109-11.413 0.009-0 0.018-0.001 0.027-0.001h-2.592c0 0-6.088 4.573-14.851 6.367-0.268 1.415-0.438 3.102-0.438 5.047s0.171 3.631 0.438 5.047c8.763 1.794 14.851 6.367 14.851 6.367h2.592c-0.009 0-0.018-0.001-0.027-0.001 2.272-0.040 4.109-5.134 4.109-11.413zM27.026 23.102c-0.293 0-0.61-0.304-0.773-0.486-0.395-0.439-0.775-1.124-1.1-1.979-0.727-1.913-1.127-4.478-1.127-7.223s0.4-5.309 1.127-7.223c0.325-0.855 0.705-1.54 1.1-1.979 0.163-0.182 0.48-0.486 0.773-0.486s0.61 0.304 0.773 0.486c0.395 0.439 0.775 1.124 1.1 1.979 0.727 1.913 1.127 4.479 1.127 7.223s-0.4 5.309-1.127 7.223c-0.325 0.855-0.705 1.54-1.1 1.979-0.163 0.181-0.48 0.486-0.773 0.486zM7.869 13.414c0-1.623 0.119-3.201 0.345-4.659-1.48 0.205-2.779 0.323-4.386 0.323-2.096 0-2.096 0-2.096 0l-1.733 2.959v2.755l1.733 2.959c0 0 0 0 2.096 0 1.606 0 2.905 0.118 4.386 0.323-0.226-1.458-0.345-3.036-0.345-4.659zM11.505 20.068l-4-0.766 2.558 10.048c0.132 0.52 0.648 0.782 1.146 0.583l3.705-1.483c0.498-0.199 0.698-0.749 0.444-1.221l-3.853-7.161zM27.026 17.148c-0.113 0-0.235-0.117-0.298-0.187-0.152-0.169-0.299-0.433-0.424-0.763-0.28-0.738-0.434-1.726-0.434-2.784s0.154-2.046 0.434-2.784c0.125-0.33 0.272-0.593 0.424-0.763 0.063-0.070 0.185-0.187 0.298-0.187s0.235 0.117 0.298 0.187c0.152 0.169 0.299 0.433 0.424 0.763 0.28 0.737 0.434 1.726 0.434 2.784s-0.154 2.046-0.434 2.784c-0.125 0.33-0.272 0.593-0.424 0.763-0.063 0.070-0.185 0.187-0.298 0.187z"></path>
                            </svg>
                            <a href="#">活動收藏</a>
                        </li>
                        <li>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>bookmark</title>
                            <path d="M24 4v24l-8-8-8 8v-24h16z"></path>
                            </svg>
                            <a href="#">文章收藏</a>
                        </li>
                        <li>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>cart</title>
                            <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"></path>
                        </svg>
                        <a href="#">訂單查詢</a>
                        </li>
                    </ul>
                </div>
                <div className="member_admin_data_moana">
                    <h1 className="form_title">個人檔案</h1>
                    <form className="member_form_moana form_moana" action="" method="">
                        <div className="user_avatar_wrapper_moana upload_img">
                        <div className="img_circle_moana img_big_circle_moana"></div>
                        <div>
                            <p>大頭貼</p>
                            <button className="button_black_moana btn-w" type="file">上傳圖片</button>
                        </div>
                        </div>
                        <div className="input_text_group_moana">
                            <label for="name">暱稱:</label>
                            <input className="input_field_moana input_text_moana" id="name" type="text" name="name" maxlength="10" />
                        </div>
                        <div className="input_date_group_moana">
                            <label for="birthday">生日:</label>
                            <input className="input_field_moana input_date_moana " id="birthday" type="date" name="birthday" />
                        </div>
                        <div className="input_text_group_moana">
                        <label for="phone">聯絡電話:</label>
                        <input className="input_field_moana input_text_moana " id="phone" type="text" name="phone" size="10" />
                        </div>
                        <div className="input_address_group_moana">
                            <label for="address">寄送地址:</label>
                            <div className="input_selects_group_moana">
                            <select className="input_field_moana input_select_moana " id="address" type="select" name="city">
                                <option value="">請選擇</option>
                            </select>
                            <select className="input_field_moana input_select_moana " id="address" type="select" name="district">
                                <option value="">請選擇</option>
                            </select>
                            </div>
                            <input className="input_field_moana input_text_moana" id="address" type="text" name="address" size="70" />
                        </div>
                        <div className="input_radio_group_moana">
                            <label for="gender">性別:</label>
                            <div>
                            <input  className="input_radio_moana" id="gender" type="radio" name="female" />女性
                            </div>
                            <div>
                            <input  className="input_radio_moana" id="gender" type="radio" name="male" />男性
                            </div>
                        </div>
                        <button className="button_import_moana btn-w">確認送出</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile