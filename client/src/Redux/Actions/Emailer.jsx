import axios from "axios"

// const { nombreContratista, mailContrado } = req.body;
export function emailer (payload) {
    return async function(dispatch) {
        try {
        console.log(payload, "CONSOLE LOG DEL PAYLOAD")
        let info = (await axios.get(`/emailer`, payload))
        console.log(info, "info")
        return info
            
        } catch(e) {
            console.error(e, "error catch")
        }
    }
}

  