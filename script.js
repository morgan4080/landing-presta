const triggers = Array.from(document.querySelectorAll('.trigger'));
let theDataSet = null
triggers.map((trigger) => {
  trigger.addEventListener("click", () => {
    theDataSet = trigger.dataset.target
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

function activateApp() {
  if (theDataSet === 'presta-pay') {
    alert("presta-pay")
    document.getElementById("the-modal").classList.add("hidden")
  }

  if (theDataSet === 'presta-lender') {
    alert("presta-lender")
    document.getElementById("the-modal").classList.add("hidden")
  }

  if (theDataSet === 'easy-ussd') {
    alert("easy-ussd")
    document.getElementById("the-modal").classList.add("hidden")
  }

  if (theDataSet === 'e-guarantorship') {
    alert("e-guarantorship")
    document.getElementById("the-modal").classList.add("hidden")
  }
}