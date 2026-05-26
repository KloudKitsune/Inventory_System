import { useForm } from "../../../hooks/useForm";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, onSwitchToLogin, onRegister, onLogin, activeModal }) {
  const { values, handleChange } = useForm({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("REGISTERING:", values);

    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const success = onRegister(values);

    if (!success) {
      alert("A user with that email already exists.");
      return;
    }

    // Optionally trigger a login using the credentials just created
    if (typeof onLogin === "function") {
      onLogin({ email: values.email, password: values.password });
    }

    // Close the modal
    onClose();
  }

  return (
    <ModalWithForm
      title="User Registration"
      buttonText="Submit"
      isOpen={activeModal === "register"}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={values.fullName}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="email"
        name="email"
        placeholder="Email Address"
        autoComplete="email"
        required
        value={values.email}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        required
        value={values.password}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        required
        value={values.confirmPassword}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
