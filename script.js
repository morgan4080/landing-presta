const triggers = Array.from(document.querySelectorAll('.trigger'));

triggers.map((trigger) => {
  trigger.addEventListener("click", () => {
    document.getElementById("the-modal").classList.remove('hidden')
    if (trigger.dataset.target === 'presta-pay') {
      document.getElementById("modal-title").innerText = "PRESTA PAY"
    }

    if (trigger.dataset.target === 'presta-lender') {
      document.getElementById("modal-title").innerText = "PRESTA LENDER"
    }

    if (trigger.dataset.target === 'easy-ussd') {
      document.getElementById("modal-title").innerText = "EASY USSD APP"
    }

    if (trigger.dataset.target === 'e-guarantorship') {
      document.getElementById("modal-title").innerText = "E-GUARANTORSHIP"
    }    
  })
})

document.getElementById("modal-toggle").addEventListener("click", () => {
  document.getElementById("the-modal").classList.add("hidden")
})