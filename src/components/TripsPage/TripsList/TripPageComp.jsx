import React, { useMemo, useState } from 'react';
import cl from './TripPageComp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import TripPageItem from './TripPageItem'
import MyModal from './../../UI/MyModal/MyModal';

export default function TripPageComp({isModal, setIsModal}) {

    const dispatch = useDispatch()
    const stateTrips = useSelector(state=>state['Trips'].tripsPage) 
    const [isActiveTariff, setIsActiveTariff] = useState(null);

    useMemo(()=>{
        if (isActiveTariff !== null) {

        }
    },[isActiveTariff])

    return (
        <div className={cl.section}>
            <div className="container">
                <p className={['top-title', cl.topTitle].join` `}>Trips</p>
                <h1 className={['title-comp', cl.title].join` `}>Top destinations</h1>
                <div className={cl.tripsContent}>
                    <ul className={cl.tripsList}>
                        {stateTrips.map(e=>{
                            return (
                                <React.Fragment key={e.id}>
                                    <TripPageItem isModal={isModal} setIsModal={setIsModal} setActiveTariff={setIsActiveTariff} idItem={e.id} daysItem={e.days} titleItem={e.namePlace} priceCount={e.priceCounter} hrefImg={e.img} itemClass={e.id-1 % 3 || e.id - 1 === 0}/>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
