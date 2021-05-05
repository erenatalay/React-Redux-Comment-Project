import React from 'react'
import YaziYorumListesi from './YaziYorumListesi'
import YorumFormu from './YorumFormu'


const YaziYorumlari = (props) => {
    
    return (
        <React.Fragment>
        <YaziYorumListesi postID = {props.postID}  yorumlar = {props.yorumlar}/>
        <YorumFormu handleSubmit={props.handleSubmit} />
        </React.Fragment>
    )
}

export default YaziYorumlari
