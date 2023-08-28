import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type RegisterValidateFormsProps = {
  valid: boolean;
  text: string;
};

function RegisterValidateForms({ valid, text }: RegisterValidateFormsProps) {
  const className = valid ? 'valid-password-check' : 'invalid-password-check';

  if (className === 'valid-password-check'){
    return <div className={ `password-check ${className}` }>
      {text} <FontAwesomeIcon icon={ faCheck } size="sm" style={{color: "#2fc125",}} />
    </div>;
  }
  return <div className={ `password-check ${className}` }>{text}</div>;
}

export default RegisterValidateForms;
