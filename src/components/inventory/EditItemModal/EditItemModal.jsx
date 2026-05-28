import { useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import ModalWithForm from "../../ModalWithForm/ModalWithForm";

function EditItemModal({ activeModal, onClose, onEditItem, selectedItem }) {
  const { values, handleChange, setValues } = useForm({
    product: "",
    manufacturer: "",
    category: "",
    sku: "",
    model: "",
    stock: "",
  });

  // Fill form with selected item data
  useEffect(() => {
    if (selectedItem) {
      setValues({
        product: selectedItem.product,
        manufacturer: selectedItem.manufacturer,
        category: selectedItem.category,
        sku: selectedItem.sku,
        model: selectedItem.model,
        stock: selectedItem.stock,
      });
    }
  }, [selectedItem, setValues]);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedItem = {
      id: selectedItem.id,
      product: values.product,
      manufacturer: values.manufacturer,
      category: values.category,
      sku: values.sku,
      model: values.model,
      stock: Number(values.stock),
    };

    onEditItem(updatedItem);
  }

  return (
    <ModalWithForm
      title="Edit Inventory Item"
      buttonText="Save Changes"
      isOpen={activeModal === "edit-item"}
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

export default EditItemModal;
