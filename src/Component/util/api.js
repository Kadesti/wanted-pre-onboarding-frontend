import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';
const access_token = localStorage.getItem('access_token');

const createTodo = (url, data) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res))
    // .then((res) => { [, res.body] })
}

const fetchCreate = (url, query, data) => {
    fetch(url, {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then((res) => {
            if (query === 'signin') localStorage.setItem('access_token', res.access_token);
            else console.log(res.status);
        })
}

const signClick = (query, emailBind, passwordBind, setDisabled) => {
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