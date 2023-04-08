import styled from 'styled-components'

const SignStyle = styled.form`
    display: flex;
    flex-direction: column;

    width: 40%;
    height: 60%;
    padding: 3%;
    border: solid 0.1em black;
    border-radius: 5%;

    justify-content: center;

    .valueInput {
       display: flex;
       justify-content: space-between;
       margin-bottom: 5%;
    }

    input {
        height: 100%;
        background: none;
        border-width: 0.1em;
    }

    input:focus {
        outline: none;
    }

`

export default SignStyle;