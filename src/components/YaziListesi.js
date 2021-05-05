import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { yaziListesiGetir } from '../actions';

const YaziListesi = () => {

    const yaziListesi = useSelector((state) => state.yaziListesi);
    const dispatch = useDispatch()
    


    useEffect(() => {
        dispatch(yaziListesiGetir())
    }, [])

    return <div className="ui relaxed divided list">
        <Link className="ui primary button" to="/yaziekle">Yazı Ekle</Link>
        {yaziListesi.map(yazi => {
            return (
                <div className="item" key={yazi.id}>
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to ={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
                        <div className="description">{yazi.created_at}</div>
                    </div>
                </div>
            );
        })}
    </div>

};

export default YaziListesi
