import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const fetchCreate = (url, query, data) => {
    fetch(url, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (query === 'signin') localStorage.setItem('access_token', res.body['access_token']);
            else console.log(res);
        })
        .catch((error) => console.log(error))
    // .then(res => res.json())
    // .then((res) => { console.log(query === 'signin' ? res.status : res); })
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