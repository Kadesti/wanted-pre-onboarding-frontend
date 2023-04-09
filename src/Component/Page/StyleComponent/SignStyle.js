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
    justify-content: space-between;

    .head-line {
        height: 30%;
    }

    .input-Container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .valueInput {
       display: flex;
       justify-content: center;
       width: 100%;
       height: 20%;
       margin-bottom: 3%;
       
       input {
           width: 100%;
           background: none;
           border-width: 0.1em;
       }
    }


    input:focus {
        outline: none;
    }

    .button-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 30%;
        
        button {
            height: 100%;
            margin-bottom: 2%;
        }
    }
`

export default SignStyle;