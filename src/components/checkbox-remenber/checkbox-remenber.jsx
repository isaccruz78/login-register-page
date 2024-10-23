import '../checkbox-remenber/checkbox-remenber.css'

const CheckboxRemenber = ({ type, text, textLink }) => {
    return (
        <div className='checkbox-remenber'>
            <div className='checkbox-remenber-input'>
                
                <label>
                    <input
                        type={type}
                    />

                    <p>{text}</p>
                </label>

            </div>

            <a href="#">{textLink}</a>
            
        </div>
    )
}

export default CheckboxRemenber