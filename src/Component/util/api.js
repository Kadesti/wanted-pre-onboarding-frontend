const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';
const access_token = localStorage.getItem('access_token');

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

/** Todo 불러오기 */
const getTodo = (setTodoList) => {
    const access_token = localStorage.getItem('access_token');

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
const updateTodo = (data, id) => {
    fetch(`${BASE_URL}/todos/${id}`, {
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
    const { checked, newValue, id } = modifyData

    console.log(checked);
    const data = {
        todo: newValue,
        isCompleted: checked
    }

    updateTodo(data, id)
}

/** Todo 삭제 요청 */
const deleteTodo = (id) => {
    fetch(`${BASE_URL}/todos/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${access_token}`
        }
    })
        .then(res => console.log(res.status))
}

/** Todo 삭제 버튼 */
const deleteClick = (id) => deleteTodo(id)

/** 회원가입 요청 */
const signUpFetch = (data, navigate) => {
    const url = `${BASE_URL}/auth/signup`
    const fetchHeader = {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
    }

    fetch(url, fetchHeader)
        .then(res => console.log(res.status))
        .then(navigate("/signin"))

}

/** 회원가입 클릭 */
const signupClick = (emailBind, passwordBind, navigate) => {
    const email = emailBind.value;
    const password = passwordBind.value;

    const data = {
        "email": email,
        "password": password
    }

    signUpFetch(data, navigate)
}

/** 로그인 요청  */
const signInFetch = (data, setIsLogin) => {
    const url = `${BASE_URL}/auth/signin`
    const fetchHeader = {
        method: `POST`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify(data),
    }

    fetch(url, fetchHeader)
        .then(res => res.json())
        .then((res) => {
            if (res.access_token !== undefined) {
                localStorage.setItem('access_token', res.access_token);
            }
        })
        .then(() => { setIsLogin(true) })
}

/** 로그인 클릭 */
const signInClick = (emailBind, passwordBind, setIsLogin) => {
    const email = emailBind.value;
    const password = passwordBind.value;

    const data = {
        "email": email,
        "password": password
    }

    signInFetch(data, setIsLogin)
}

export { sumbmitTodo, getTodo, onClickModify, deleteClick, signupClick, signInClick }