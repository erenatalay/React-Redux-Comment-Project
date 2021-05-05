import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { yorumSil } from '../actions';

const YaziYorumListesi = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
   
  

    const handleDelete = (yorum) => {
        dispatch(yorumSil(id,yorum))
    }


    return (
        <React.Fragment>
            <h3>Yorumlar</h3>
            {props.yorumlar.map(yorum => {
                return (
                    <div key={yorum.id} className="ui relaxed list">
                        <div className="item">
                           
                            <div className="content">
                                <span className="header">{yorum.display_name}</span>
                                <div onClick = {() => handleDelete(yorum.id)} ><i aria-hidden="true" className="delete red icon right floated"></i></div>
                                <Link to={`/posts/${id}/comments/${yorum.id}`}><i className="edit yellow icon right floated"></i></Link>
                                
                                <div className="description">{yorum.body}</div>
                                
                            </div>
                        </div>
                        

                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default YaziYorumListesi
