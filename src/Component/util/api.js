import { useEffect, useState } from 'react';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';
const access_token = localStorage.getItem('access_token');

const useAuthnticated = () => {
    const [authnticated, setAuthnticated] = useState(null);

    useEffect(() => {
        const loggedUser = localStorage.getItem("access_token");
        if (loggedUser && loggedUser !== 'undefined') setAuthnticated(loggedUser);
    }, [])

    return authnticated;
}

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
    console.log('url: ', url);
    console.log('query: ', query);
    console.log('data: ', data);

    const fetchHeader = {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
    }

    if (query === 'signin') {
        fetch(url, fetchHeader)
            .then(res => res.json())
            .then((res) => { localStorage.setItem('access_token', res.access_token); })
    }
    else {
        fetch(url, fetchHeader)
            .then(res => console.log(res.status))
    }
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

export { signClick, useAuthnticated }