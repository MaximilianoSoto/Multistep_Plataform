const $form = document.querySelector("#form")



$form.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location.href = "step2.html"
    $form.reset()
})