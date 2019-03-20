import axios from "axios"; 

export default {
    findLong: (urls) =>{
        return axios.post("api/urls/findLong", urls);
    },
    findOrCreate: (urls) =>{
        return axios.post("api/urls/submit", urls)
    },
    findShort: (urls) =>{
        return axios.post("api/urls/findShort", urls)
    },
    create: (urls) =>{
        return axios.post("api/urls/submit2", urls);
    }
}