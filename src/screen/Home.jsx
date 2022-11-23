import React, { useState } from 'react';
import { Button, Card, Row, Col, ListGroup } from 'react-bootstrap';
import Calendar, { formatDate } from 'react-calendar';
import Clock from '../components/Clock';
import { createUseStyles } from 'react-jss';
import dayjs from 'dayjs';

const useStyles = createUseStyles({
  customCalendar: {
    background: 'none',
    border: 'none',
    width: '90%',
    height: 'calc(100% - 400px)',
    overflowY: 'auto',
  },
});
const Home = ({}) => {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Row style={{ height: '100%' }}>
        <Col lg='8' style={{ position: 'relative' }}>
          <h2 className='text-start fw-bold'>こんにちは、リッケイ</h2>
          <Row className='left-upper-layout'>
            <Col lg='3' md='6' xs='12' className='pt-3'>
              <Button className='custom-button purple'>
                <img
                  className='mx-auto custom-img'
                  src='image/icon/start.png'
                ></img>
                <div className='fw-bold'>出勤</div>
              </Button>
            </Col>
            <Col lg='3' md='6' xs='12' className='pt-3'>
              <Button className='custom-button red'>
                <img
                  className='mx-auto custom-img'
                  src='image/icon/end.png'
                ></img>
                <div className='fw-bold'>退勤</div>
              </Button>
            </Col>
            <Col lg='3' md='6' xs='12' className='pt-3'>
              <Button className='custom-button green'>
                <img
                  className='mx-auto custom-img'
                  src='image/icon/plus.png'
                ></img>
                <div className='fw-bold'>残業</div>
              </Button>
            </Col>
            <Col lg='3' md='6' xs='12' className='pt-3'>
              <Button className='custom-button light-blue'>
                <img
                  className='mx-auto custom-img'
                  src='image/icon/pause.png'
                ></img>
                <div className='fw-bold'>休暇</div>
              </Button>
            </Col>
          </Row>
          <Row className='left-lower-layout'>
            <Col lg='8' style={{ maxHeight: '100%' }}>
              <Card style={{ border: 'none' }}>
                <h5 className='text-start fw-bold'>最近の活動</h5>

                <Card.Body className='left-lower-layout-body'>
                  <ListGroup>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-out btn-danger'>退勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-out btn-danger'>退勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-out btn-danger'>退勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-out btn-danger'>退勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-out btn-danger'>退勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-in'>出勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-in'>出勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-in'>出勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-in'>出勤</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className='left-lower-layout-body-activities'>
                      <span>2020年10月20日</span>
                      <span>18時44分30妙</span>
                      <Button className='button-in'>出勤</Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='4'>
              <Card style={{ border: 'none' }}>
                <h5 className='text-start fw-bold'>退勤統計</h5>
                <Card.Body className='sum-body px-0'>
                  <Row>
                    <Col lg='6'>
                      <Card className='sum-body-card'>
                        <span>出勤日</span>
                        <h4>14日</h4>
                      </Card>
                    </Col>
                    <Col lg='6'>
                      <Card className='sum-body-card'>
                        <span>土日祝</span>
                        <h4>6日</h4>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card className='sum-body-card'>
                        <span>出勤時間</span>
                        <h4>102時30分</h4>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg='6'>
                      <Card className='sum-body-card'>
                        <span>残業時間</span>
                        <h4>10時間</h4>
                      </Card>
                    </Col>
                    <Col lg='6'>
                      <Card className='sum-body-card'>
                        <span>休暇時間</span>
                        <h4>15時間</h4>
                      </Card>
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
                  <div className='title me-2'>
                    <i className='fa-solid fa-user me-1'></i>
                    <span>メンバー</span>
                  </div>
                  <div className='device me-2'>
                    <i className='fa-solid fa-computer me-1'></i>
                    <span>会社のPC</span>
                  </div>
                  <div className='location'>
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
            <img src='image/icon/clock.png' className='clock-custom'></img>
            <div className='time-custom'>
              <Clock />
            </div>
            {/*  <h6 className='text-custom fw-bold w-75 text-start'>カレンダー</h6> */}
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
