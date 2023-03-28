import React, { useRef, useState } from 'react'
import cl from './MyCalendarDate.module.css'
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const MyCalendarDate = ({isActive, setIsActive, setIsCalendar, isCalendar}) => {

    const [currentDate, setCurrentDate] = useState(dayjs());
    const monthNames = useSelector(state=>state['Months'])

    const dateElement = useRef('')
    const calendarTitle = useRef('')


    let filledArr = [];
    filledArr.length = currentDate.daysInMonth() + currentDate.startOf("month").day()
    filledArr.fill('')

    const prevBtn = (e)=>{
        e.preventDefault();
        setCurrentDate(currentDate.subtract(1, "month").startOf("month"))
    }

    const nextBtn = (e)=>{
        e.preventDefault();
        setCurrentDate(currentDate.add(1, "month").startOf("month"))
    }

    const todayBtn = (e)=>{
        e.preventDefault();
        setCurrentDate(dayjs())
    }

  return (
   <div  className={cl.calendar}>
    <div className={cl.calendarTitle}>
        <div ref={calendarTitle} className={cl.calendarTitleText}>{`${monthNames[currentDate.month()]} - ${currentDate.year()}`}</div>
        <div className={cl.calendarButtonGroup}>
        <button className={cl.prevMonth} onClick={e=>prevBtn(e)}></button>
        <button className={cl.today} onClick={e=>todayBtn(e)}>Today</button>
        <button className={cl.nextMonth} onClick={e=>nextBtn(e)}></button>
        </div>
    </div>
    <div className={cl.calendarDayName}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
    </div>
    <div ref={dateElement} className={cl.calendarDates}>
        {filledArr.map((e,i,arr)=>{
            if (i < currentDate.startOf("month").day()) {
                return <button key={i} className={[cl.calendarDatesDayEmpty, cl.dates].join` `}></button>
            } else {
                return <button key={i} className={[cl.calendarDatesDay, cl.dates].join` `} onClick={e=>{setIsActive({...isActive[0], [isActive[1]]: !{...isActive[0]}[isActive[1]]});setIsCalendar(`${e.target.textContent} ${monthNames[currentDate.month()]} ${currentDate.year()}`)}}>{i+1-currentDate.startOf("month").day()}</button>
            }
            
        })}
    </div>
    </div>
  )
}



export default MyCalendarDate