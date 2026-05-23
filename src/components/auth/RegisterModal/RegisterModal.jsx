import ModalWithForm from "../../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, onSwitchToLogin }) {
  return (
    <ModalWithForm
      title="User Registration"
      buttonText="Submit"
      isOpen={true}
      onClose={onClose}
      onSubmit={(e) => e.preventDefault()}
      extraActions={
        <button
          type="button"
          className="modal__link-button"
          onClick={onSwitchToLogin}
        >
          Back to Login
        </button>
      }
    >
      <input
        className="modal__input"
        type="text"
        name="fullName"
        placeholder="Full Name"
        autoComplete="name"
        required
      />

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
        autoComplete="new-password"
        required
      />

      <input
        className="modal__input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        required
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
