import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type LoginToggleButtonProps = {
  passwordType: boolean;
  onClick: () => void;
};

function LoginToggleButton({ passwordType, onClick }: LoginToggleButtonProps) {
  return (
    <div className="pass-toggle-button">
      <button
        className="toggle-pass"
        id="togglePassword"
        data-testid="show-hide-form-password"
        type="button"
        onClick={ onClick }
      >
        <FontAwesomeIcon size="xl" icon={passwordType ? faEye : faEyeSlash} />
      </button>
    </div>
  );
}

export default LoginToggleButton;
