import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function TimeTable ({ element }) {
	return (
		<ListGroup.Item className='left-lower-layout-body-activities'>
		<span>{element.newDate}</span>
		<span>{element.newTime}</span>
		<Button
			className={
				element.type === '出勤' ? 'button-in' : 'button-out btn-danger'
			}
		>
			{element.type}
		</Button>
	</ListGroup.Item>
	)
}
	
export default TimeTable;