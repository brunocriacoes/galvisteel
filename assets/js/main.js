import ReadTable from "./class/ReadTable.js"


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
    let modeloDefault = data.filter( m => m.modelo == valuesInput.modelo)
    Object.keys(valuesInput).forEach(key => {
        let valorInputKey = valuesInput[key]
        if(valorInputKey != "N/A") {
            let tmp = modeloDefault.filter( t => t[key] == valorInputKey)
            if(tmp.length > 0) {
                modeloDefault = tmp
            }            
        }        
    });
    
    let img = modeloDefault[0].imagem || null
    
    $imagem.src = get_image(img)
    
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
$cor.innerHTML = cor.map(t => `<option>${t}</option>`)
$modelo.innerHTML = modelo.map(t => `<option>${t}</option>`)
$preenchimento.innerHTML = preenchimento.map(t => `<option>${t}</option>`)
$quant_apoios.innerHTML = quant_apoios.map(t => `<option>${t}</option>`)
$tipo.innerHTML = tipo.map(t => `<option>${t}</option>`)
$vao_metros.innerHTML = vao_metros.map(t => `<option>${t}</option>`)

$imagem.src = get_image(data[0].imagem)

globalThis.alterImage = alterImage

alterImage()
