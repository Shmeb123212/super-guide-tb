import React from 'react'
import cl from './MySelect.module.css';

const  MySelect = ({isActive, setIsActive, handleChangeSelect, dataSelect}) => {
  return (
    <div className={cl.select}>
        <ul className={cl.selectList}>
            {dataSelect.map((e, i)=>{
                return (
                    <React.Fragment key={i}>
                        <li className={cl.item} onClick={event=>{handleChangeSelect(event,e.item);setIsActive({...isActive[0], [isActive[1]]: !{...isActive[0]}[isActive[1]]})}}>
                            {e.text}
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
    </div>
  )
}

export default MySelect