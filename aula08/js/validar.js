
function validarForm() {
  event.preventDefault()

  const MSG_ERRO = document.getElementById('msg-erro');
  const ALL_INPUTS = document.querySelectorAll('input');

  ALL_INPUTS.forEach((ALL_INPUTS) => {
    if(ALL_INPUTS.value === '') {
      MSG_ERRO.style.display = 'block';
      ALL_INPUTS.classList.add('is-invalid');
    } else {
      ALL_INPUTS.classList.add('is-valid');
    }
  });
}
