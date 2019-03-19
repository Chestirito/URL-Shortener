import axios from "axios"; 

export default {
    findLong: (urls) =>{
        return axios.post("api/urls/findLong", urls);
    },
    findShort: (urls) =>{
        return axios.post("api/urls/findShort", urls)
    },
    findOrCreate: (urls) =>{
        return axios.post("api/urls/submit", urls);
    }
}