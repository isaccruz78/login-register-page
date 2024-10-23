import { Link } from 'react-router-dom'
import '../form-link/form-link.css'

const FormLink = ({ text, route, linkText }) => {
  return (
    <div className='form-link'>
      <p>{text} <Link to={route}>{linkText}</Link></p>
    </div>
  )
}

export default FormLink