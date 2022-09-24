import axios from "axios";

// const { nombreContratista, mailContrado } = req.body;
export function emailer(payload) {
  return async function (dispatch) {
    try {
      let info = await axios.post(`/emailer`, payload);
    } catch (e) {
      console.error(e, "error catch action emailer");
    }
  };
}
