import '../input/input.css'

const Input = ({ name, type, placeholder, register, Icon, error }) => {
  return (
    <div className='input-container'>
      <div className='input-box'>

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />

        {Icon && <Icon id="icon" />}

      </div>

      {error && <div id='msg-error-input'>{error.message}</div>}

    </div>
  )
}

export default Input