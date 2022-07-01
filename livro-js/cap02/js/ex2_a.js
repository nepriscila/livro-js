// Referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// cria um "ouvinte" do evento quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value // obtém o contéudo das caixas
    const preco = Number(frm.inPreço.value)

    const promocao = Math.floor(preco*2) // calcula o preço com o desconto

    resp1.innerText = `Promoção de: ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}` //exibe a resposta
    
    e.preventDefault()
})