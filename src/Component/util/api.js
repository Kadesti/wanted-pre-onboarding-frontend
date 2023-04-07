import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';


const fetchCreate = (url, query, data) => {
    axios.post(url, { headers: { "Content-Type": "application/json" } }, { body: data })
        .then((res) => { console.log(query === 'signin' ? res.status : res); })
        .catch((error) => console.log(error))
}

const signClick = (query, emailBind, passwordBind) => {
    const email = emailBind.value;
    const password = passwordBind.value;

    const testCh = (email, password) => /@/.test(email) && /\w{8,}/.test(password)
    if (!testCh(email, password)) return;

    const data = {
        "email": email,
        "password": password
    }

    fetchCreate(`${BASE_URL}auth/${query}`, query, data)
}

export { signClick }