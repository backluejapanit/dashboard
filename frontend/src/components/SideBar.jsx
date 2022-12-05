import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <nav className='sidebar'>
      <header>
        <div className='logo-img'>
          <Link to='/'>
            <img src='/favicon.png' alt='logo' />
          </Link>
        </div>
      </header>

      <div className='menu-bar'>
        <ul className='menu'>
          <li>
            <Link to='/'>
              <img src="/image/icon/home.png" alt="home" />
              <div className='text'>ホーム</div>
            </Link>
          </li>

          <li className='nav-link'>
            <Link to='/user'>
            <img src="/image/icon/user.png" alt="home" />
              <div className='text'>ユーザー</div>
            </Link>
          </li>

          <li className='nav-link'>
            <Link to='/timesheet'>
            <img src="/image/icon/timesheet.png" alt="home" />
              <div className='text'>
                タイム<br></br>シート
              </div>
            </Link>
          </li>

          <li className='nav-link'>
            <Link to='/setting'>
            <img src="/image/icon/setting.png" alt="home" />
              <div className='text'>設定</div>
            </Link>
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
