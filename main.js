let fortune = [
  "A vida trará coisas boas se tiver paciência.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
  "A paciência na adversidade é sinal de um coração sensível.",
  "A sorte favorece a mente bem preparada.",
  "Todas as coisas são difíceis antes de se tornarem fáceis.",
  "Se você se sente só é porque construiu muros ao invés de pontes.",
  "Você é do tamanho do seu sonho.",
]

const fortuneBtn = document.querySelector("#cookie")

const randomFortune = document.querySelector("h3")

const screen1 = document.querySelector(".screen1")

const screen2 = document.querySelector(".screen2")

const backBtn = document.querySelector("#backBtn")

// functions

const toggleHidden = () => {
  screen1.classList.toggle("hidden")
  screen2.classList.toggle("hidden")
}

const handleFortuneBtn = (e) => {
  e.preventDefault()

  toggleHidden()

  randomFortune.innerText = fortune[Math.round(Math.random() * fortune.length)]

  randomFortune.style.animation = "revealFortune 1s ease forwards"
}

const goBack = () => {
  toggleHidden()
}

// Events

fortuneBtn.addEventListener("click", handleFortuneBtn)

backBtn.addEventListener("click", goBack)
