;(function emailSetup() {
  const link = document.getElementById('email')
  link.addEventListener('click', (e) => {
    alert('gleb.bahmutov' + '@' + 'gmail.com')
    e.preventDefault()
  })
}())
