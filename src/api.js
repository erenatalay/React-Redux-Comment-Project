import Axios from "axios";

export function api() {return Axios.create({
    baseURL : "https://react-yazi-yorum.herokuapp.com"
});

}

