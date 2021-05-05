import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import YaziFormu from './YaziFormu'

const YaziDuzenle = () => {

    // const [yazi, setYazi] = useState({});

    const { id } = useParams();

    const yazi = useSelector((state) => state.yaziDetayi)



    return (
        <div>
            <h1>Yazı Duzenleme Formu</h1>
            <YaziFormu yazi={yazi} />
        </div>
    )
}

export default YaziDuzenle
