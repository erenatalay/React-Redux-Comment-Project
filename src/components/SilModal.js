import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';
import { yaziSil } from '../actions';


const SilModal = ({ yazi }) => {

    const [open, setOpen] = useState(false);
    const hata = useSelector((state) => state.yaziSilHata)
    const show = () => {
        setOpen(true);
    }
    const close = () => {
        setOpen(false);
    }

    const {push} = useHistory();
    const dispatch = useDispatch();



    const handleDelete = (id) => {
        dispatch(yaziSil(id, close, push));
    }


    return (
        <React.Fragment>
            <Button color="red" onClick={show}>Sil</Button>
            <Modal size="mini" open={open} onClick={close}>
                <Modal.Header>Yazıyı Sil</Modal.Header>
                <Modal.Content>
                    <p><b>{yazi.title} </b>Bu Yazıyı Silmek İstedğinizden Emin misiniz ?</p>
                    {hata && (<div className="ui error message">
                        <div className="header">Hata</div>
                        <p>{hata}</p>
                    </div>)}


                </Modal.Content>
                <Modal.Actions>
                    <Button negative>Hayır</Button>
                    <Button positive icon="delete" labelPosition="right" content="Evet" onClick={() => handleDelete(yazi.id)} />
                </Modal.Actions>
            </Modal>
        </React.Fragment>
    )
}

export default SilModal
