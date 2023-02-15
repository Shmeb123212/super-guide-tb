import React, { useMemo, useState } from 'react'
import cl from './FindTrip.module.css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckInChange } from '@/redux/findTrip-reducer'
import { useInView } from 'react-intersection-observer'
import MyCalendarDate from '../../UI/MyCalendarDate/MyCalendarDate'
import MySelect from '../../UI/MySelect/MySelect';
import { setCheckInInfo, setCheckOutInfo, setPersonInfo, setPlaceInfo } from '@/redux/personInfo-reducer'

export default function FindTripComponent() {
    const stateSelects = useSelector(state=>state['Trip Selects'])
    const statePersonInfo = useSelector(state=>state['Person info'])
    const dispatch = useDispatch()
    const {ref, isView} = useInView({
        threshold: 0,
        onChange: (inView, entry)=>{
            !entry.target.classList.contains(cl.active) && inView && entry.target.classList.add(cl.active)
        }
    })

    const monthNames = useSelector(state=>state['Months'])
    const currentDate = new Date()
    const tomorrowDate = new Date(currentDate)
    tomorrowDate.setDate(tomorrowDate.getDate()+1);

    const [isCheckIn, setIsCheckIn] = useState(statePersonInfo.checkIn ? statePersonInfo.checkIn : `${currentDate.getDate()} ${monthNames[currentDate.getUTCMonth()]} ${currentDate.getFullYear()}`)
    const [isCheckOut, setIsCheckOut] = useState(statePersonInfo.checkOut ? statePersonInfo.checkOut :`${tomorrowDate.getDate()} ${monthNames[tomorrowDate.getUTCMonth()]} ${tomorrowDate.getFullYear()}`)
    const [isPerson, setIsPerson] = useState(statePersonInfo.countOfPeople ? statePersonInfo.countOfPeople : stateSelects.person)
    const [isLocation, setIsLocation] = useState(statePersonInfo.place ? statePersonInfo.place : stateSelects.places)


    useMemo(()=>{
        if(+(isCheckIn.split` `[2]) > +(isCheckOut.split` `[2])) {
            const aTemp = isCheckIn
            const bTemp = isCheckOut
            setIsCheckIn(bTemp);
            setIsCheckOut(aTemp);      
        } else if (+(isCheckIn.split` `[2]) == +(isCheckOut.split` `[2]) && isCheckIn.split` `[1] == isCheckOut.split` `[1] && +(isCheckIn.split` `[0]) > +(isCheckOut.split` `[0])) {
            const aTemp = isCheckIn
            const bTemp = isCheckOut
            setIsCheckIn(bTemp);
            setIsCheckOut(aTemp);           
        } else if (+(isCheckIn.split` `[2]) == +(isCheckOut.split` `[2]) && monthNames.indexOf(isCheckIn.split` `[1]) > monthNames.indexOf(isCheckOut.split` `[1])) {
            const aTemp = isCheckIn
            const bTemp = isCheckOut
            setIsCheckIn(bTemp);
            setIsCheckOut(aTemp); 
        }

    },[isCheckIn, isCheckOut])

    const [isSelects, setIsSelects] = useState({selectOut: false, selectIn: false, selectPerson: false, selectPlaces: false}) 


    const placesChangeActive = (e, activeSelect)=>{
        e.preventDefault();
        setIsLocation(isLocation.map(e=>e.id == activeSelect.id ? {...e, active: true} : {...e, active: false}))
    }

    const personChangeActive = (e, activeSelect)=>{
        e.preventDefault();
        setIsPerson(isPerson.map(e=>e.id == activeSelect.id ? {...e, active: true} : {...e, active: false}))
    }


    const sendFormTrip = (e)=>{
        dispatch(setCheckOutInfo({checkOut: isCheckOut}))
        dispatch(setCheckInInfo({checkIn: isCheckIn}))
        dispatch(setPersonInfo({countOfPeople: isPerson}))
        dispatch(setPlaceInfo({place: isLocation}))
    console.log(statePersonInfo)

    }
    
  return (
    <section className={cl.section}>
        <div className="container">
            <div ref={ref} className={cl.content}>
                <ul className={cl.listTrip}>
                    <li className={cl.itemTrip}>
                        <div className={cl.itemContent}>
                            <div className={cl.titleItem}>
                                <span className={[cl.titleImg, cl.locationImg].join` `}></span>LOCATION
                            </div>
                            <div className={cl.select}>
                            <div className={cl.selectHead}  onClick={e=>setIsSelects({...isSelects, selectPlaces: !isSelects.selectPlaces})}>
                                    {isLocation.filter(e=>e.active)[0].namePlace}
                                    <span className={cl.selectArrow}>
                                        <svg width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>

                                    </span>
                                </div>
                                <div className={cl.selectBody}>
                                    <div className={isSelects.selectPlaces ? [cl.selectValues, cl.activeSelectTime].join` ` : cl.selectValues}>
                                        <MySelect isActive={[isSelects, 'selectPlaces']} setIsActive={setIsSelects} dataSelect={isLocation.filter(e=>!e.active).map(e=>{return {text: e.namePlace, item: e}})} handleChangeSelect={placesChangeActive} />
                                    </div>
                                </div>
                            </div>
                        </div>                   
                        <span className={cl.line}></span>
                    </li>
                    <li className={cl.itemTrip}>
                    <div className={cl.itemContent}>
                        <div className={cl.titleItem}>
                            <span className={[cl.titleImg, cl.personImg].join` `}></span>PERSON
                        </div>
                        <div className={cl.select}>
                        <div className={cl.selectHead}  onClick={e=>setIsSelects({...isSelects, selectPerson: !isSelects.selectPerson})}>
                                {isPerson.filter(e=>e.active)[0].countPerson}
                                <span className={cl.selectArrow}>
                                    <svg width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                                </span>
                            </div>
                            <div className={cl.selectBody}>
                                <div className={isSelects.selectPerson ? [cl.selectValues, cl.activeSelectTime].join` ` : cl.selectValues}>
                                    <MySelect isActive={[isSelects, 'selectPerson']} setIsActive={setIsSelects} dataSelect={isPerson.filter(e=>!e.active).map(e=>{return {text: e.countPerson, item: e}})} handleChangeSelect={personChangeActive} />
                                </div>
                            </div>
                        </div>
                        </div>
                        <span className={cl.line}></span>

                    </li>
                    <li className={cl.itemTrip}>
                    <div className={cl.itemContent}>
                        <div className={cl.titleItem}>
                            <span className={[cl.titleImg, cl.checkInImg].join` `}></span>CHECK-IN
                        </div>
                        <div className={cl.select}>
                            <div className={cl.selectHead}  onClick={e=>setIsSelects({...isSelects, selectIn: !isSelects.selectIn})}>
                                {isCheckIn}
                                <span className={cl.selectArrow}>
                                    <svg width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                                </span>
                            </div>
                            <div className={cl.selectBody}>
                                <div className={isSelects.selectIn ? [cl.bodyContent ,cl.activeSelectTime].join` ` : cl.bodyContent}>
                                    <MyCalendarDate setIsActive={setIsSelects} isActive={[isSelects, 'selectIn']} setIsCalendar={setIsCheckIn} isCalendar={isCheckIn}/>
                                </div>
                            </div>
                        </div>
                        </div>
                        <span className={cl.line}></span>

                    </li>
                    <li className={cl.itemTrip}>
                    <div className={cl.itemContent}>
                        <div className={cl.titleItem}>
                            <span className={[cl.titleImg, cl.checkOutImg].join` `}></span>CHECK-OUT
                        </div>
                        <div className={cl.select}>
                            <div className={cl.selectHead}  onClick={e=>setIsSelects({...isSelects, selectOut: !isSelects.selectOut})}>
                                {isCheckOut}
                                <span className={cl.selectArrow}>
                                    <svg width="17px" height="17px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>
                                </span>
                            </div>
                            <div className={cl.selectBody}>
                                <div className={isSelects.selectOut ? [cl.bodyContent ,cl.activeSelectTime].join` ` : cl.bodyContent}>
                                <MyCalendarDate setIsActive={setIsSelects} isActive={[isSelects, 'selectOut']} setIsCalendar={setIsCheckOut} isCalendar={isCheckOut}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className={[cl.itemTrip, cl.itemBtn].join` `}>
                        <Link href={'/trips'}>
                            <button className={cl.tripBtn} onClick={e=>sendFormTrip(e)}><span className={cl.leftThing}></span><span className={cl.textBtn}>Find Trip</span></button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
