import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';
const access_token = localStorage.getItem('access_token');

// 인증
const useAuthnticated = () => {
    const [authnticated, setAuthnticated] = useState(null);

    useEffect(() => {
        const loggedUser = localStorage.getItem("access_token");
        if (loggedUser && loggedUser !== 'undefined') setAuthnticated(loggedUser);
    }, [])

    return authnticated;
}

// Create
const createTodo = (data) => {
    fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

const sumbmitTodo = (newTodo, setNewTodo) => {
    // e.preventDefault();

    const data = {
        todo: newTodo,
        isCompleted: false,
        userId: 1
    }
    createTodo(data)
    setNewTodo('');
}

// Read
const getTodo = (setTodoList) => {
    fetch(`${BASE_URL}/todos`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${access_token}`
        }
    })
        .then(res => res.json())
        .then(res => setTodoList(res))
}

// Update
const updateTodo = (data, idx, navigate) => {
    console.log('data: ', data);

    fetch(`${BASE_URL}/todos/${idx}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": `application/json`
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(navigate("/todo"))
}

const onClickModify = (modifyData, navigate) => {
    const { checked, newValue } = modifyData
    const idx = modifyData["item.id"]
    console.log(idx);

    const data = {
        todo: newValue,
        isCompleted: checked
    }

    updateTodo(data, idx, navigate)
}

// Sign
const fetchCreate = (url, query, data, navigate) => {
    const fetchHeader = {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
    }

    if (query === 'signin') {
        fetch(url, fetchHeader)
            .then(res => res.json())
            .then((res) => { localStorage.setItem('access_token', res.access_token); })
            .then(navigate("/todo"))
            .then(console.log('실행'))
    }
    else {
        fetch(url, fetchHeader)
            .then(res => console.log(res.status))
            .then(navigate("/signin"))
    }
}

const signClick = (query, emailBind, passwordBind, navigate, setDisabled) => {
    const email = emailBind.value;
    const password = passwordBind.value;

    const testCh = (email, password) => /@/.test(email) && /\w{8,}/.test(password)
    if (!testCh(email, password)) return;

    const data = {
        "email": email,
        "password": password
    }

    fetchCreate(`${BASE_URL}/auth/${query}`, query, data, navigate)
    // navigate("/todo")

    // signup 이 중복 시행되었을 떄 signin으로 가지 않도록
    // = 조건문이 false
}

export { signClick, useAuthnticated, sumbmitTodo, getTodo, onClickModify }