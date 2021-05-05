import Axios from "axios";
import { api } from "../api";

export const yaziListesiGetir = () => dispatch =>{
    api()
    .get('/posts')
        .then(response => {
            dispatch({type:"YAZI_LISTESI_GETIR",payload:response.data})
        }).catch(() => {
            dispatch({type:"YAZI_LISTESI_GETIR_HATA",payload:"Yazi listesi yüklenirken hata oluştu."})
        })
}

export const yaziDetayiGetir = (id) => dispatch => {
    Axios.all([
        api().get(`/posts/${id}`),
        api().get(`/posts/${id}/comments`)
    ]).then(responses => {
        const payload = {
            ...responses[0].data,
             yorumlar:responses[1].data
        }
        dispatch({type:"YAZI_DETAY_GETIR",payload:payload})
        
    }).catch(error =>
        dispatch({type:"YAZI_GETIR_HATA",payload:"Yazi Yüklenirken Hata Oluştu"}));
}


export const yorumEkle = (id,yorum) => dispatch => {

    api()
    .post(`/posts/${id}/comments`, yorum)
    .then(response => {
        dispatch({type:"YORUM_EKLE",payload:response.data})
       

    }).catch(error => {
      dispatch({type:"YORUM_EKLE_HATA",payload:"Yorum eklerken hata oldu"})
    })


}

export const yorumSil =(postID,id) => dispatch => {

  api()
  .delete(`/posts/${postID}/comments/${id}`)
  .then(() => {
    dispatch({type:"YORUM_SİL",payload:id});
  })

  


}


export const yaziSil = (id, close, push) => (dispatch) => {
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        dispatch({ type: "YAZI_SIL", payload: id });
        close();
        push(`/`);
      })
      .catch(() => {
        dispatch({
          type: "YAZI_SIL_HATA",
          payload: "Yazıyı silerken hata oluştu.",
        });
      });
  };


  export const yorumDuzenle = (postID, id,yorum,push) => dispatch => {
    api()
    .put(`/posts/${postID}/comments/${id}`,yorum)
    .then(response => {
      
      dispatch({type:"YORUM_DUZENLE",payload:response.data})
      push(`/posts/${postID}`)
    })
  }

  export const yaziDuzenle = (id,yazi,push) => dispatch => {
    api()
    .put(`/posts/${id}`,yazi)
    .then(response => {
        dispatch({type:"YAZI_DUZENLE",payload:response.data})
         push(`/posts/${id}`)
    }).catch(error => {
        dispatch({type:"YAZI_DUZENLE_HATA",payload:'BAŞLIK VE YAZI İÇERİĞİ ZORUNLU ŞEKİLDE DOLDURULMALIDIR'})  
    })
  }