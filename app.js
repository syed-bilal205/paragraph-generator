const input = document.getElementById('numOfWords');
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

const genterateWord =(n)=>{
    let text=''
    
    const letter ='abcdefghijklmnopqrstuvwxyz'

    for(let i=0; i<n; ++i){

        const random =(Math.random() * 25).toFixed(0)
        text += letter[random]
    }

    return text;
}



let numOfWords;

const generatePara =()=>{
    numOfWords = Number(input.value)

    const para = document.createElement('p')

    let data = ''

    for (let i=0; i< numOfWords; ++i){
       data += genterateWord((Math.random() * 15).toFixed(0))
       data += ' ';
    }

    para.innerText= data;

    para.setAttribute("class","paras")

    container.append(para)
}


