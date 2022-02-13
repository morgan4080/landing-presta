const sign_up_form = document.getElementById('sign-up-form');
const inputs = Array.from(sign_up_form.querySelectorAll('input[type="text"]'));

inputs.map((input) => {
  if (input.id !== undefined) {
    const corres_label = Array.from(
      input.parentElement.querySelectorAll(`label[for="${input.id}"]`)
    );
    if (corres_label.length > 0) {
      input.addEventListener('focus', () => {
        corres_label.map((label) => {
          label.classList.add(['-top-6']);
        });
      });
    }
  }
});
