const Input = ({ label, value }) => {
    const dataTestId = label === "email" ? "email-input" : "password-input";

    return (
        <div className='valueInput'>
            <label>{label}</label>
            <input data-testid={dataTestId} {...value} />
        </div>
    )
}

export default Input;