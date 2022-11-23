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
              <i className='bx bx-home-alt icon'></i>
              <div className='text'>ホーム</div>
            </a>
          </li>

          <li className='nav-link'>
            <a href='/user'>
              <i className='bx bx-bar-chart-alt-2 icon'></i>
              <div className='text'>ユーザー</div>
            </a>
          </li>

          <li className='nav-link'>
            <a href='/timesheet'>
              <i className='bx bx-bell icon'></i>
              <div className='text'>
                タイム<br></br>シート
              </div>
            </a>
          </li>

          <li className='nav-link'>
            <a href='/setting'>
              <i className='bx bx-pie-chart-alt icon'></i>
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
