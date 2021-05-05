import {api} from '../api'
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yaziDuzenle } from '../actions';
const YaziFormu = (props) => {

    const [yazi, setYazi] = useState({ title:  "", content: "" })
    const [hata, setHata] = useState("");

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const onInputChange = (event) => setYazi({ ...yazi, [event.target.name]: event.target.value })
    

    const onFormSubmit = (event) => {
        setHata("");
        event.preventDefault();


        if(props.yazi?.title){
            //edit işlemi
            dispatch(yaziDuzenle(id,yazi,history.push))
        }else{
            //add işlemi
        api().post(`/posts`, yazi)
        .then(response => history.push('/'))
        .catch(error => {
            setHata('BAŞLIK VE YAZI İÇERİĞİ ZORUNLU ŞEKİLDE DOLDURULMALIDIR')  
        });

        }

    }

  useEffect(() => {
    if(props.yazi?.title && props.yazi?.content){
        setYazi({title:props.yazi.title,content:props.yazi.content});
    }
  }, [props.yazi])

    return (
        <>

            {hata &&  (<div className="ui error message">
                <div className="header">Hata</div>
                <p>{hata}</p>
            </div>)}


            <div className="ui form">

                <div className="field">
                    <label>Yazi Başlığı</label>

                    <input value={yazi.title} type="text" name="title" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>
                        Yazi İçeriği
                 </label>

                    <textarea
                        value={yazi.content}
                        name="content"
                        onChange={onInputChange}
                        rows="3">

                    </textarea>
                </div>
                <button className="ui primary button" type="button" onClick={onFormSubmit}>Gönder</button>
                <button className="ui button" type="submit">İptal Et</button>
            </div>
        </>
    )
}

export default YaziFormu
