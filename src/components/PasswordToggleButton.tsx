import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type PassToggleBtnProps = {
  passwordType: boolean;
  onClick: () => void;
};

function PasswordToggleButton({ passwordType, onClick }: PassToggleBtnProps) {
  return (
    <div className="password-toggle-button">
      <button
        className="toogle-button"
        id="togglePassword"
        data-testid="show-hide-form-password"
        type="button"
        onClick={ onClick }
      >
        <FontAwesomeIcon size="lg" icon={passwordType ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}

export default PasswordToggleButton;
