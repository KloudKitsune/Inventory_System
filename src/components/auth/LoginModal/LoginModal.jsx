import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ onClose, onSwitchToRegister }) {
  return (
    <ModalWithForm
      title="Login"
      buttonText="Submit"
      isOpen={true}
      onClose={onClose}
      onSubmit={(e) => e.preventDefault()}
      extraActions={
        <button
          type="button"
          className="modal__link-button"
          onClick={onSwitchToRegister}
        >
          Register
        </button>
      }
    >
      <input
        className="modal__input"
        type="email"
        name="email"
        placeholder="Email Address"
        autoComplete="email"
        required
      />

      <input
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        required
      />
    </ModalWithForm>
  );
}

export default LoginModal;
