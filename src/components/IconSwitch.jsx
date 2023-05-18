import React from 'react'
import ListView from './ListView'
import CardsView from './CardsView'
import {view_list, view_module } from'https://fonts.googleapis.com/icon?family=Material+Icons'

export default function IconSwitch() {
  return (
    <div>
        <view_list/>


        <button >{view_list}</button>
        <button >{view_module }</button>
    </div>
  )
}
