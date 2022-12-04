import React from 'react';

function SideBar() {
  return (
    <nav className='sidebar'>
      <header>
        <div className='logo-img'>
          <a href='/'>
            <img src='/favicon.png' alt='logo' />
          </a>
        </div>
      </header>

      <div className='menu-bar'>
        <ul className='menu'>
          <li>
            <a href='/home'>
              <img src="/image/icon/home.png" alt="home" />
              <div className='text'>ホーム</div>
            </a>
          </li>

          <li className='nav-link'>
            <a href='/user'>
            <img src="/image/icon/user.png" alt="home" />
              <div className='text'>ユーザー</div>
            </a>
          </li>

          <li className='nav-link'>
            <a href='/timesheet'>
            <img src="/image/icon/timesheet.png" alt="home" />
              <div className='text'>
                タイム<br></br>シート
              </div>
            </a>
          </li>

          <li className='nav-link'>
            <a href='/setting'>
            <img src="/image/icon/setting.png" alt="home" />
              <div className='text'>設定</div>
            </a>
          </li>
        </ul>

        <div className='bottom-content'>
          <a href='/logout'>
            <i className='bx bx-log-out icon'></i>
            <div className='text'>ログアウト</div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
