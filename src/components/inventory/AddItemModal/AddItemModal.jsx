import { useForm } from "../../../hooks/useForm";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";

function AddItemModal({ activeModal, onClose, onAddItem }) {
  const { values, handleChange, setValues } = useForm({
    product: "",
    manufacturer: "",
    category: "",
    sku: "",
    model: "",
    stock: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      product: values.product,
      manufacturer: values.manufacturer,
      category: values.category,
      sku: values.sku,
      model: values.model,
      stock: Number(values.stock),
    };

    onAddItem(newItem);

    setValues({
      product: "",
      manufacturer: "",
      model: "",
      stock: "",
      category: "",
      sku: "",
    });
  }

  return (
    <ModalWithForm
      title="Add Inventory Item"
      buttonText="Add Item"
      isOpen={activeModal === "add-item"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input"
        type="text"
        name="product"
        placeholder="Product Name"
        required
        value={values.product}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="text"
        name="manufacturer"
        placeholder="Manufacturer"
        required
        value={values.manufacturer}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="text"
        name="model"
        placeholder="Model"
        required
        value={values.model}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="number"
        name="stock"
        placeholder="Stock Quantity"
        required
        min="0"
        value={values.stock}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="text"
        name="category"
        placeholder="Category"
        required
        value={values.category}
        onChange={handleChange}
      />

      <input
        className="modal__input"
        type="text"
        name="sku"
        placeholder="SKU"
        required
        value={values.sku}
        onChange={handleChange}
      />
    </ModalWithForm>
  );
}

export default AddItemModal;
