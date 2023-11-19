import axios from "axios";

// authentication for login
// this fn returns true if login is successfull or false if unsuccessfull
export const getAuthToken = async (loginData) => {

    let config = {
        url: 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp',
        method: 'POST',
        data: loginData,
    };

    try {
        const res = await axios.request(config);
        const token = res.data.access_token;

        // storing received token in local storage to maintain session token
        localStorage.setItem('token',token);
        return true;
    } catch (error) {
        console.log(error);
        alert(error.message);
        return false;
    }
}
