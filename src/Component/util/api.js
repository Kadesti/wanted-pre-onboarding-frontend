import { useEffect, useState } from 'react';

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
const updateTodo = (data, idx) => {
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
}

const onClickModify = (modifyData) => {
    const { checked, newValue } = modifyData
    const idx = modifyData["item.id"]

    const data = {
        todo: newValue,
        isCompleted: checked
    }

    updateTodo(data, idx)
}

// Delete
const deleteTodo = (idx) => {
    fetch(`${BASE_URL}/todos/${idx}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${access_token}`
        }
    })
        .then(res => console.log(res.status))
}

const deleteClick = (id) => deleteTodo(id)

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
            .then((res) => {
                console.log('token');
                localStorage.setItem('access_token', res.access_token);
            })
            .then(() => {
                console.log("/todo");
                navigate("/todo")
            })
    }
    else {
        fetch(url, fetchHeader)
            .then(res => console.log(res.status))
            .then(navigate("/signin"))
    }
}

const signClick = (query, emailBind, passwordBind, navigate) => {

    const email = emailBind.value;
    const password = passwordBind.value;

    const data = {
        "email": email,
        "password": password
    }

    fetchCreate(`${BASE_URL}/auth/${query}`, query, data, navigate)
    // navigate("/todo")

    // signup 이 중복 시행되었을 떄 signin으로 가지 않도록
    // = 조건문이 false
}

export { useAuthnticated, sumbmitTodo, getTodo, onClickModify, deleteClick, signClick }