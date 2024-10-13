const customValidationBodyHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Catatan wajib diisi");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Catatan minimal 10 karakter");
    return;
  }
};

export { customValidationBodyHandler };
