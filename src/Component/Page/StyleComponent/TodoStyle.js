import styled from 'styled-components'

const TodoStyle = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 40%;
    height: 60%;
    padding: 3%;
    border: solid 0.1em black;
    border-radius: 5%;

    justify-content: space-between;

    /* background-color: #EEE9DA; */

    .todo-contents {
        position: relative;
        overflow-y: scroll;
    }

    .new-todo {
        margin-bottom: 8%;
        position: sticky;
        top:20px;

        input {
            width: 80%;
            height: 100%;
            margin-right: 2%;
            background: none;
            border-width: 0.1em;
        }

        input:focus {
            outline: none;
        }
    }

    li {
        margin-bottom: 2%;
    }
    button {
        display: inline-block;
        height: 100%;
        background: none;
        position: relative;

        border-color: black;
        border-radius: 5%;
        border-width: 0.1em;
    }

    button:focus {
        outline: none;
    }

    label {
        display: flex;
        width: 100%;        

        > :nth-child(2) {
            flex-grow:1;
        }
        > :nth-child(3) {
            margin-right: 0.3em;
        }
    }

    button.logout{
        height: 10%;
        border-radius: 10px;
    }
`

export default TodoStyle;