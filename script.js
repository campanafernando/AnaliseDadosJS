let num = document.querySelector('input#numbers')
let tab = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let numlist = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }

}
function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function addnumber(){
    if(isNumber(num.value) && !inList(num.value, numlist)) {
        numlist.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
     
     }
    else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function exit(){
    if (numlist.length == 0){
        window.alert('Insira algum valor para dar continuidade.')
    }
    else {
        let total = numlist.length
        let maior = numlist[0]
        let menor = numlist[0]
        let soma = 0
        let media = 0
        for(let pos in numlist) {
            soma += numlist[pos]
            if (numlist[pos] > maior)
            maior = numlist[pos]
            if (numlist[pos] < menor)
            menor = numlist[pos]
        }
        res.innerHTML = ''
        if (numlist.length == 1){
            res.innerHTML += `<p>Apenas um número foi cadastrado.</p>`
        }
        else{
            media = soma / total
            res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
            res.innerHTML += `<p>O maior número é ${maior} e o menor é ${menor}.</p>`
            res.innerHTML += `<p>A soma entre todos os valores é ${soma}.`
            res.innerHTML += `<p>A média entre os números é ${media}.`
        }
        
    }
}