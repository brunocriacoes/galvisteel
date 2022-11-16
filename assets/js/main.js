import ReadTable from "./class/ReadTable.js"
import colors from "./class/colors.js"
import images from "./class/images.js"

const table = new ReadTable()
const data = await table.getData()

function removerDuplicate(arr) {

    return arr.reduce((acc, t) => {
        if (!acc.includes(t)) {
            acc.push(t)
        }
        return acc
    }, [])
}

function get_image(uri) {
    const urlParams = new URLSearchParams(uri.split('?')[1]);
    const id = urlParams.get('id')
    return `https://drive.google.com/uc?id=${id}`
}

function alterImage() {
    let aplicacao = document.querySelector('.js-aplicacao').value
    let cor = document.querySelector('.js-cor').value
    let modelo = document.querySelector('.js-modelo').value
    let preenchimento = document.querySelector('.js-preenchimento').value
    let quant_apoios = document.querySelector('.js-quant_apoios').value
    let tipo = document.querySelector('.js-tipo').value
    let vao_metros = document.querySelector('.js-vao_metros').value
    let $imagem = document.querySelector('.js-imagem')
    let img_loading = "https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif"
    $imagem.src = img_loading
    document.querySelector('.js-imagem').style.backgroundColor ="#FFF"

    if(tipo != 'Termoacústica') {
        document.querySelector('.js-preenchimento').setAttribute('disabled', 'disabled')
        document.querySelector('.js-preenchimento').value = "N/A"
        document.querySelector('.js-aplicacao').removeAttribute('disabled')
    }else {
        document.querySelector('.js-preenchimento').removeAttribute('disabled')
        document.querySelector('.js-aplicacao').value = "N/A"
        document.querySelector('.js-aplicacao').setAttribute('disabled', 'disabled')
    }

    let valuesInput = {
        preenchimento,
        aplicacao,
        modelo,
        cor,
        quant_apoios,
        tipo,
        vao_metros,
        data,
    }
        
    let img = './assets/images/' + images[modelo] + '.png' || null
    setTimeout(() => {
        $imagem.src = (img)
        document.querySelector('.js-imagem').style.backgroundColor = colors[cor]
    }, 500)
    
}


let aplicacao = removerDuplicate(data.map(e => e.aplicacao))
let cor = removerDuplicate(data.map(e => e.cor))
let modelo = removerDuplicate(data.map(e => e.modelo))
let preenchimento = removerDuplicate(data.map(e => e.preenchimento))
let quant_apoios = removerDuplicate(data.map(e => e.quant_apoios))
let tipo = removerDuplicate(data.map(e => e.tipo))
let vao_metros = removerDuplicate(data.map(e => e.vao_metros))

let $aplicacao = document.querySelector('.js-aplicacao')
let $cor = document.querySelector('.js-cor')
let $modelo = document.querySelector('.js-modelo')
let $preenchimento = document.querySelector('.js-preenchimento')
let $quant_apoios = document.querySelector('.js-quant_apoios')
let $tipo = document.querySelector('.js-tipo')
let $vao_metros = document.querySelector('.js-vao_metros')
let $imagem = document.querySelector('.js-imagem')

$aplicacao.innerHTML = aplicacao.map(t => `<option>${t}</option>`)
$cor.innerHTML = Object.keys(colors).map(t => `<option>${t}</option>`)
$modelo.innerHTML = modelo.map(t => `<option>${t}</option>`)
$preenchimento.innerHTML = preenchimento.map(t => `<option>${t}</option>`)
$quant_apoios.innerHTML = quant_apoios.map(t => `<option>${t}</option>`)
$tipo.innerHTML = tipo.map(t => `<option>${t}</option>`)
$vao_metros.innerHTML = vao_metros.map(t => `<option>${t}</option>`)

$imagem.src = get_image(data[0].imagem)

globalThis.alterImage = alterImage

alterImage()
