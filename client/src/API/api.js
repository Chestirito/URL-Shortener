import axios from "axios"; 

export default {
    find: (urls) =>{
        return axios.post("api/urls/find", urls);
    }
}