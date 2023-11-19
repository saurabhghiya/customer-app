import axios from "axios";

let path = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp';

//a fn available across the app to make api calls for CRUD operations
export const makeRequest = async (type,cmd,uuid,data) => {
    // retrieving session token from local storage
    let token = localStorage.getItem('token');

    // config for api calls dynamically set using parameters passed
    let config = {
        url: path + (`?cmd=${cmd}`) + (uuid ? `&uuid=${uuid}` : ''),
        method: type,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: data
    }

    try {
        let res = await axios.request(config);
        return res.data;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}