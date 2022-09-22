import axios from "axios"

// const { nombreContratista, mailContrado } = req.body;
export function emailer ({nombreContratista, mailContrado}) {
    console.log(nombreContratista, mailContrado, "datita")
    return async function(dispatch) {
        try {
        let info = (await axios.get(`http://localhost:3001/emailer`, nombreContratista, mailContrado)).data
        console.log(info)
        return info
            
        } catch(e) {
            console.error(e, "error catch")
        }
    }
}

  