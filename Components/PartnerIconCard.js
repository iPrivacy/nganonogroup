import Image from 'next/image'
import React from 'react'
import style from '../Components/PartnerIconCard.module.css'

export default function PartnerIconCard(props) {
  return (
    <div className={style.image} >
        <Image
        src={props.partnerImage}
         style={{borderRadius: "0px 0px 100px 100px "}}
        layout="fill"
        objectFit='contain'
        />
    </div>
  )
}
