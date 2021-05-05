import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { yorumDuzenle } from '../actions'



const YORUM_BASLANGIC = {
    display_name: "",
    body: "",
}


const YorumFormu = (props) => {
    const [yorum, setYorum] = useState(YORUM_BASLANGIC)
    const handleOnChange = event => {

        setYorum({ ...yorum, [event.target.name]: event.target.value })


    }
    const {id,post_id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    

    const onFormSubmit = (event)=> {
        if (props.yorum?.body) {
            dispatch(yorumDuzenle(post_id,id,yorum,history.push))
            
        }
        event.preventDefault()
    }

    

    useEffect(() => {
        if (props.yorum?.display_name && props.yorum?.body) {
            setYorum({display_name:props.yorum.display_name, body:props.yorum.body})
        }
    }, [props.yorum])


    return (
        <React.Fragment>
            <h3>Yorum Yaz</h3>
            <form className="ui form" onSubmit={(event) => {
                props.handleSubmit(event, yorum)
                setYorum(YORUM_BASLANGIC)
              
            }}>

                <div className="ui mini icon input">
                    <input type="text"
                        name="display_name"
                        placeholder="Adınız"
                        onChange={handleOnChange}
                        value={yorum.display_name} 
                        disabled = {(props?.yorum) ? "disabled" :""}
                        />
                </div>

                <textarea
                    name="body"
                    placeholder="Yorumunuz" rows="3"
                    onChange={handleOnChange}
                    value={yorum.body}></textarea>
                <button className="ui blue button" onClick={(props?.yorum) ? onFormSubmit:""} type="submit">Yorumu Göder</button>
            </form>
        </React.Fragment>
    )
}

export default YorumFormu
