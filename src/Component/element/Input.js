const Input = ({ label, value }) => {
    const isEmail = label === "email";
    const dataTestId = isEmail ? "email-input" : "password-input";

    return (
        <div className='valueInput'>
            {/* <label>{label}</label> */}
            <input data-testid={dataTestId} type={isEmail ? " " : "password"}{...value}
                placeholder={isEmail ? "아이디" : "비밀번호"}
            />
        </div>
    )
}

export default Input;