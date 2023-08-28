import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type RegisterToggleButtonProps = {
  passwordType: boolean;
  onClick: () => void;
};

function RegisterToggleButton({ passwordType, onClick }: RegisterToggleButtonProps) {
  return (
    <div className="password-toggle-button">
      <button
        className="toogle-button"
        id="togglePassword"
        data-testid="show-hide-form-password"
        type="button"
        onClick={ onClick }
      >
        <FontAwesomeIcon size="xl" icon={passwordType ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}

export default RegisterToggleButton;
