import React from 'react'
import { useState } from 'react'

export default function FeaturedCard(props) {

  return (
    <div className="featuredCard">
        <div className="f-cover">
            <img src={props.cover} style={{width:'250px', borderRadius:'20px', marginBottom:'10px'}} />
        </div>
        <div className='f-songDetails'>
            <h2 style={{marginBottom:'5px'}}>{props.title}</h2>
            <p style={{opacity:'80%', fontWeight:'100'}}>{props.artist}</p>
        </div>
        <div className="f-btn">View Song</div>
    </div>
  )
}