import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';


const fetchCreate = (url, query, data) => {
    if (query === 'signin') {
        axios.post(url, { headers: { "Content-Type": "application/json" } }, { body: data })
            .then((res) => console.log(res.status))
            .catch((error) => console.log(error))
    }
    if (query === 'signup') {
        axios.post(url, { headers: { "Content-Type": "application/json" } }, { body: data })
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }
}

const signClick = (query, emailBind, passwordBind) => {
    const email = emailBind.value;
    const password = passwordBind.value;

    const testCh = (email, password) => /@/.test(email) && /\w{8,}/.test(password)
    if (testCh) return;

    const data = {
        "email": email,
        "password": password
    }

    fetchCreate(`${BASE_URL}/auth/${query}`, query, data)
}

export { signClick }