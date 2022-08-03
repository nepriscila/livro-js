const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {

const produto = frm.inProduto.value
const preco = Number(frm.inPreco.value)

const produto3 = preco * 0.50
const promocao = (preco * 3 - produto3)

resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`
resp2.innerText = `O 3º produto custa apenas R$: ${produto3.toFixed(2)}`

e.preventDefault()
})