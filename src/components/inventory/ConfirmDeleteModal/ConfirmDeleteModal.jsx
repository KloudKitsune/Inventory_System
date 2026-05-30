import ModalWithForm from "../../ModalWithForm/ModalWithForm";
import "./ConfirmDeleteModal.css";

function ConfirmDeleteModal({
  activeModal,
  onClose,
  onConfirmDelete,
  itemToDelete,
}) {
  return (
    <ModalWithForm
      title="Confirm Delete"
      buttonText="Delete"
      isOpen={activeModal === "confirm-delete"}
      onClose={onClose}
      onSubmit={(e) => {
        e.preventDefault();
        onConfirmDelete();
      }}
    >
      <p className="modal__text">Are you sure you want to delete:</p>

      <p className="modal__text modal__text--bold">{itemToDelete?.product}</p>
    </ModalWithForm>
  );
}

export default ConfirmDeleteModal;
