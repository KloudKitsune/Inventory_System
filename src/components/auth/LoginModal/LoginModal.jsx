import { useForm } from "../../../hooks/useForm";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ onClose, onSwitchToRegister, onLogin, activeModal }) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("LOGIN ATTEMPT:", values);

    const success = onLogin(values);

    if (!success) {
      alert("Invalid email or password");
      return;
    }

    console.log(JSON.parse(localStorage.getItem("users")));

    // Close modal on successful login
    if (typeof onClose === "function") onClose();
  }

  return (
    <ModalWithForm
      title="Login"
      buttonText="Submit"
      isOpen={activeModal === "login"}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={values.email}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        required
        value={values.password}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default LoginModal;
