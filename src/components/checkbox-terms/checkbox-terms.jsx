import '../checkbox-terms/checkbox-terms.css'

const CheckboxTerms = ({ name, type, register, text, textLink, error }) => {
    return (
        <div className='checkbox-terms'>
            <div className='checkbox-terms-input'>

                <label>
                    <input
                        name={name}
                        type={type}
                        {...register(name)}
                    />

                    <p>{text} <a href='#'>{textLink}</a>.</p>
                </label>

            </div>

            {error && <div id='msg-error-input'>{error.message}</div>}

        </div>
    )
}

export default CheckboxTerms