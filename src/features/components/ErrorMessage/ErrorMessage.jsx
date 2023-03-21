import './ErrorMessage.scss'

const ErrorMessage = () => {

    return (
        <div className="error-message">
            <div className="error-message__container">
                <div className="error-message__text">
                    No hero with such name
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage;