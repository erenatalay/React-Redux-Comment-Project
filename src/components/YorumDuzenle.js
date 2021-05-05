import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../api';
import YorumFormu from './YorumFormu'

const YorumDuzenle = () => {

    const [editYorum,seteditYorum] = useState({})

    const { post_id,id } = useParams();

    useEffect(() => {
        api()
        .get(`/posts/${post_id}/comments`)
        .then((response) => {
           response.data.find((yorums) => {
                if (Number(id) === Number(yorums.id)) {
                    seteditYorum({display_name:yorums.display_name,body:yorums.body})  
                }
           });
        })
      
    }, [])

    return (
        <div>
            <YorumFormu yorum={editYorum} />
        </div>
    )
}

export default YorumDuzenle
