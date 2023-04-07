const Input = ({ label, value }) => {
    const isEmail = label === "email";
    const dataTestId = isEmail ? "email-input" : "password-input";

    return (
        <div className='valueInput'>
            <label>{label}</label>
            <input data-testid={dataTestId} type={isEmail ? " " : "password"}{...value} />
        </div>
    )
}

export default Input;