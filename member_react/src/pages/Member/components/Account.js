import React from 'react'

function Account() {
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
                        <a href="#">帳號密碼</a>
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
                <div className="member_admin_data_moana member_pw_col_moana">
                <h1 className="form_title">帳號密碼</h1>
                <div className="form_moana">
                    <form action="" method="">
                    <div className="inner-icons">
                        <svg className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>mail3</title>
                        <path d="M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM5.707 27.707l-2.414-2.414 8-8 0.914 0.914-6.5 9.5zM4.793 6.207l0.914-0.914 10.293 8.293 10.293-8.293 0.914 0.914-11.207 13.207-11.207-13.207zM26.293 27.707l-6.5-9.5 0.914-0.914 8 8-2.414 2.414z"></path>
                        </svg>
                        <input className="input_field_moana input_text_moana" type="text" size="25" placeholder="電子信箱" />
                    </div>
                    <div className="inner-icons">
                        <svg  className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>key</title>
                            <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                        </svg>
                        <input  fill="black" className="input_field_moana input_text_moana" type="text" size="25" placeholder="密碼設定" />
                    </div>
                    <div className="inner-icons">
                        <svg  className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <title>key</title>
                            <path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                        </svg>
                        <input  fill="black" className="input_field_moana input_text_moana" type="text" size="25" placeholder="密碼確認" />
                    </div>
                    <div className="button-bg">
                        <button className="btn_white_moana button_import_moana">註冊</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Account