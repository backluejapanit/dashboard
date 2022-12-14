import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, ListGroup, Table } from 'react-bootstrap';

/* ------ref component */
import Calendar from 'react-calendar';
import { createUseStyles } from 'react-jss';
import dayjs from 'dayjs';
import AnalogueClock from '../components/AnalogueClock';
import DigitalClock from '../components/DigitalClock';
import TimeTable from '../components/TimeTable';

/* ------backend------ */
import { createAPIEndpoint, ENDPOINTS, BASE_URL } from '../api'

const useStyles = createUseStyles({
  customCalendar: {
    background: 'none',
    border: 'none',
    width: '90%',
    height: 'calc(100% - 410px)',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'M PLUS Rounded 1c',
  },
});

const Home = () => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  const [timeTable, setTimeTable] = useState([]);
  const [clicked, setClicked] = useState(2);
  const [workingDay, setWorkingDay] = useState(0);

  const currentHour = new Date().getHours();
  const startDate = new Date('01/01/2021');
  const endDate = new Date('12/31/2021');
  const lastObj = timeTable[timeTable.length - 1];

  const greeting =
    currentHour < 12
      ? 'おはようごうざいます、'
      : currentHour > 12 && currentHour < 18
      ? 'こんにちは、'
      : 'こんばんは、';

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.workingtime)
      .fetch() 
      .then(res => {
        setTimeTable(res.data)
        console.log(res.data)
      })
      .catch(err => { console.log(err); })
  }, [])

  const handleClick = (element) => {
    let dateObj = new Date();
    let dateCheckDublicate = new Date().toLocaleDateString();
    let totalHour;

    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1; //months from 1-12
    let year = dateObj.getFullYear();
    let newDate = year + '年' + month + '月' + day + '日';
    let dateCheck = `${month}/${day}/${year}`;
    

    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();
    let newTime = hour + '時' + minute + '分' + second + '妙';

      if (element === 'getIn' && (!timeTable.some((obj) => obj.dateCheck === dateCheckDublicate))) {
        setClicked(1)
        setWorkingDay(workingDay + 1);
        setTimeTable([
          ...timeTable,
          { newDate, newTime, type: '出勤', dateCheck },
        ]);
        createAPIEndpoint(ENDPOINTS.workingtime)
          .post({newDate, newTime, type: '出勤', dateCheck, clicked: 1, latestTimestamp: dateObj, totalHour: 0})
      }

      if (element === 'getOut' /* && (!timeTable.some((obj) => obj.dateCheck === dateCheckDublicate) || !timeTable.some((obj) => obj.type === '退勤')) */) {
        setClicked(2)
        totalHour = Math.floor(Math.abs(dateObj - lastObj.latestTimestamp)/36000)
        /* 2 cái date ở trên khác format nhau nên cách hay nhất là gửi hết xuống backend rồi DateDiff */
        setTimeTable([
          ...timeTable,
          { newDate, newTime, type: '退勤', dateCheck},
        ]);
        createAPIEndpoint(ENDPOINTS.workingtime)
          .post({newDate, newTime, type: '退勤', dateCheck, clicked: 2, latestTimestamp: ''})
      }
  };

  const getBusinessDatesCount = (startDate, endDate) => {
    let count = 0;
    const curDate = new Date(startDate.getTime());

    while (curDate <= endDate) {
        const dayOfWeek = curDate.getDay();
        if(dayOfWeek === 0 || dayOfWeek === 6) count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
  }

  return (
    <>
      <Row style={{ height: '100%' }}>
        <Col lg='8' style={{ position: 'relative' }}>
          <h2 className='text-start fw-bolder'>
            {greeting}
            タッチャン
          </h2>
          <Row className='left-upper-layout'>
            <Col md='3' xs='6' className='pt-3'>
              <Button
                className='custom-button purple'
                onClick={() => handleClick('getIn')}
                disabled={lastObj?.clicked ? lastObj?.clicked === 1 : clicked === 1}
              >
                <img
                  className='mx-auto custom-img'
                  src='image/icon/start.png'
                  alt='start'
                ></img>
                <div className='fw-bold'>出勤</div>
              </Button>
            </Col>
            <Col md='3' xs='6' className='pt-3'>
              <Button 
                className='custom-button red' 
                onClick={() => handleClick('getOut')}
                disabled={lastObj?.clicked ? lastObj?.clicked === 2 : clicked === 2}
              >
                <img
                  className='mx-auto custom-img'
                  src='image/icon/end.png' alt="end"
                ></img>
                <div className='fw-bold'>退勤</div>
              </Button>
            </Col>
            <Col md='3' xs='6' className='pt-3'>
              <Button className='custom-button green'>
                <img
                  className='mx-auto custom-img'
                  src='image/icon/plus.png' alt="plus"
                ></img>
                <div className='fw-bold'>残業</div>
              </Button>
            </Col>
            <Col md='3' xs='6' className='pt-3'>
              <Button className='custom-button light-blue'>
                <img
                  className='mx-auto custom-img'
                  src='image/icon/pause.png' alt="pause"
                ></img>
                <div className='fw-bold'>休暇</div>
              </Button>
            </Col>
          </Row>
          <Row className='left-lower-layout'>
            <Col lg='8' style={{ maxHeight: '400px' }}>
              <Card style={{ border: 'none' }}>
                <h5 className='text-start fw-bold'>最近の活動</h5>

                <Card.Body className='left-lower-layout-body'>
                  <ListGroup>
                    {timeTable.slice().reverse().map((element, index) => (
                      <TimeTable element={element} key={index} />
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='4'>
              <Card className="sum" style={{ border: 'none' }}>
                <h5 className='text-start fw-bold'>退勤統計</h5>
                <Card.Body className='sum-body px-0'>
                  <Row>
                    <Col lg='6'>
                      <div className='sum-body-card'>
                        <span>出勤日</span>
                        <h5>{workingDay}日</h5>
                      </div>
                    </Col>
                    <Col lg='6'>
                      <div className='sum-body-card'>
                        <span>土日祝</span>
                        <h5>{getBusinessDatesCount(startDate, endDate)}日</h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className='sum-body-card second'>
                        <span>出勤時間</span>
                        <h5>{lastObj?.totalHour || 0}時</h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg='6'>
                      <div className='sum-body-card'>
                        <span>残業時間</span>
                        <h5>0時間</h5>
                      </div>
                    </Col>
                    <Col lg='6'>
                      <div className='sum-body-card'>
                        <span>休暇時間</span>
                        <h5>0時間</h5>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg='4'>
          <Card className='right-calendar-layout'>
            <section className='profile-custom'>
              <img src='image/icon/cat.png' alt='' />
              <div className='ps-4'>
                <h5 className='text-start fw-bold m-0'>リッケイ</h5>
                <div className='info-details'>
                  <div className='info-details-chip'>
                    <i className='fa-solid fa-user me-1'></i>
                    <span>メンバー</span>
                  </div>
                  <div className='info-details-chip'>
                    <i className='fa-solid fa-computer me-1'></i>
                    <span>会社のPC</span>
                  </div>
                  <div className='info-details-chip'>
                    <i className='fa-solid fa-location-dot'></i>
                    <span className='mx-1'>会社</span>
                    <i className='fa-solid fa-circle-info'></i>
                  </div>
                </div>
              </div>
              <Button>
                <i className='fa-regular fa-bell'></i>
              </Button>
            </section>
            <div className='analogue-clock-custom'>
              <AnalogueClock />
            </div>
            <div className='digital-clock-custom'>
              <DigitalClock />
            </div>
           {/*  <h6 className='text-custom w-75 text-start'>カレンダー</h6> */}
            <Calendar
              className={classes.customCalendar}
              onChange={onChange}
              value={value}
              locale='ja-JP'
              next2Label={null}
              prev2Label={null}
              formatDay={(locale, date) => dayjs(date).format('DD')}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
