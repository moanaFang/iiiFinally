import React from 'react'
@import './style/css/reset.css';
@import './style/css/member.css';

function Login() {
    return (
        <>
            <div classNameName="layout_container_bg_moana">
                <div className="layout_col_moana login_col_moana">
                <div className="form_moana">
                    <h1>登入</h1> 
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
                    <button className="btn_pink_moana button_import_moana">登入</button>
                    </form>
                    <div className="login_regist_links_moana">
                    <a href="#">忘記密碼</a>
                    <a href="#">一鍵登入</a>
                    </div>
                </div>
                </div>
                <div className="layout_col_moana regist_col_moana">
                <div className="form_moana">
                    <h2>註冊</h2>
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
                        <div className="button_shadow">
                        </div>
                        <button className="btn_white_moana button_import_moana">註冊</button>
                    </div>
                    </form>
                    <div className="ad_moana">
                    <div className="wrap">
                        <h4>歡迎光臨</h4>
                        <h5>請填寫您的帳號密碼，歡迎加入我們，<br />
                        很高興您能成為我們的一員</h5>
                        <button className="btn_pink_moana button_import_moana">註冊</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
      )
}
  
export default Login
