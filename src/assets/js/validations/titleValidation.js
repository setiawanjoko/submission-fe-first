const customValidationTitleHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Judul catatan wajib diisi");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Judul catatan minimal 10 karakter");
    return;
  }
};

export { customValidationTitleHandler };
