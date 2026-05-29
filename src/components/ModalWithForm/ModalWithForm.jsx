import "./ModalWithForm.css";
import { useEffect } from "react";
import closebtn from "../../assets/closeicon-white.svg";

function ModalWithForm({
  children,
  title,
  buttonText = "Save",
  isOpen,
  onClose,
  onSubmit,
  isValid = true,
  extraActions,
  buttonGroupVariant,
  submitButtonClass = "",
}) {
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`modal ${isOpen ? "modal--opened" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>

        <button onClick={onClose} type="button" className="modal__close">
          <img src={closebtn} alt="close" />
        </button>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <div
            className={`modal__button-group ${
              buttonGroupVariant
                ? `modal__button-group--${buttonGroupVariant}`
                : ""
            }`}
          >
            <button
              type="submit"
              className={`modal__submit ${submitButtonClass} ${
                isValid ? "modal__submit--active" : "modal__submit--disabled"
              }`}
              disabled={!isValid}
            >
              {buttonText}
            </button>

            {extraActions && (
              <div className="modal__extra-actions">{extraActions}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
