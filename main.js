//OBJETOS FILOSOFO E GARFO
function filosofoFactory(pos, elemento){
    return ({
        pos: pos,
        comendo: false,
        comFome: false,
        garfoD: null,
        garfoE: null,
        prato: elemento,

        garfosLivres(){
            if(this.garfoD.livre === true && this.garfoE.livre === true){
                return true
            }else{
                return false
            }
        },
        comer(){
            if(this.garfosLivres() && !this.comendo){
                this.comendo = true
                this.comFome = false

                this.garfoD.livre = false
                this.garfoE.livre = false

                console.log(`filosofo ${this.pos} esta comendo`)
                this.prato.style.background = "green"

                setTimeout(() => {
                    console.log(`filosofo ${this.pos} parou de comer`)
                    this.prato.style.background = "rgb(204, 204, 204)"

                    this.comendo = false
                    this.garfoD.livre = true
                    this.garfoE.livre = true
                }, 5000)

            }
        },
        sentirFome(){
            let numAleatorio = Math.floor(Math.random()* (10 - 0) + 0)
            if (numAleatorio > 5){
                this.comFome = true

                console.log(`filosofo ${this.pos} esta com fome`)
                this.prato.style.background = "red"
            }
        },
        limpar(){
            this.comFome = false
            this.comendo = false
            this.garfoD.livre = true
            this.garfoE.livre = true
            this.prato.style.background = "rgb(204, 204, 204)"
        }
    })
}

function garfoFactory(valor){
    return {livre: valor}
}


//GERA OS GARFOS E COLOCA NO ARRAY
const garfos = Array(5).fill().map( () => garfoFactory(true))

//GERA FILOSOFOS E CRIA ARRAY
const filosofos = Array(5).fill().map(
        (v, key) => filosofoFactory(key, document.querySelector(`#f${key} .prato`))
     )

//LISTA DE FILOSOFOS COM FOME
let filosofosComFome = Array(5).fill()

//ATRIBUI OS GARFOS AOS FILOSOFOS
filosofos.map( (val, ind) => {
    if(ind === 0){
        val.garfoE = garfos[4]
        val.garfoD = garfos[ind]
    }else{            
        val.garfoE = garfos[ind - 1]
        val.garfoD = garfos[ind]
    }
})


const botao = document.querySelector('button')

function main (){
    botao.disabled = true
    botao.textContent = "RODANDO"

    let rodando = setInterval(() => {
        for(f of filosofosComFome){
            if (f != undefined){
                if(f.comFome && f.garfosLivres()){
                    f.comer()
                    filosofosComFome = filosofosComFome.map((x) => x != f ? x : undefined)
                }
            }
        }
    
        for(f of filosofos){
            if(!f.comendo){
                f.sentirFome()
                if (f.comFome){
                    if (f.garfosLivres()){
                        f.comer()   
                    }else{
                        filosofosComFome.push(f)
                    }
            
                }
            }
        }
        console.log("=====================================")
    }, 1000)
    
    setTimeout(() => {
        clearInterval(rodando)
        botao.disabled = false
        botao.textContent = "INICIAR"

        for (i of filosofos){
            i.limpar()
        }
    }, 90000)
}

document.querySelector('button').onclick = () => main()