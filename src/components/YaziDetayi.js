import React, { useEffect } from 'react'
import YaziYorumlari from './YaziYorumlari';
import { Link, useParams } from 'react-router-dom';
import SilModal from './SilModal';
import { yaziDetayiGetir, yorumEkle } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


const YaziDetayi = () => { 
    const yaziDetayi = useSelector(state => state.yaziDetayi)

    const dispatch = useDispatch();

    const {id} = useParams();



    const handleCommentSubmit = (event, yorum) => {

        event.preventDefault();
      dispatch(yorumEkle(id,yorum));
    }


    useEffect(() => {
       dispatch(yaziDetayiGetir(id))

    }, [])


    return (
        <React.Fragment>
            <h2 className="ui header">{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <div className="ui buttons">
                <Link to={`/posts/${yaziDetayi.id}/edit`} className="ui yellow button" >Düzenle</Link>
                {/* <button className="ui red button">Sil</button> */}
                <SilModal yazi = {yaziDetayi} />
            </div>
            <p>{yaziDetayi.content}</p>

            <YaziYorumlari postID = {id} yorumlar={yaziDetayi.yorumlar} handleSubmit={handleCommentSubmit} />
            


        </React.Fragment>
    )
}

export default YaziDetayi;
