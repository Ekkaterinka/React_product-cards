import { useState } from 'react'
import ListView from '../src/components/ListView'
import CardsView from '../src/components/CardsView'
import React from 'react'
import { MdViewList, MdGridView } from 'react-icons/md'

export default function Store() {
  const [iconSwitch, setIconSwitch] = useState(true);
   const  onSwitch = () => setIconSwitch((event) => !event);


   return (
    <div>
    <button className="material-symbols-outlined" onClick={onSwitch}> {iconSwitch ? <MdViewList/> : <MdGridView/>}</button>
    <div style={{ paddingTop : '20px'}}> {iconSwitch && <ListView /> || <CardsView/> }  </div>
    
    </div>
    
   );
 }

