const text = document.querySelector('main')
window.onload = function (){

    function backgroundColor(){
    let getBackground = document.querySelector('#background')
    getBackground.addEventListener('change', function(){
       //document.body.style.backgroundColor = getBackground.value;
        text.style.backgroundColor = getBackground.value
        localStorage.setItem('backgroundColor', getBackground.value)
        console.log(localStorage)
        
    })    
}

    function changeColor() {
        let getColor = document.querySelector('#color');
        getColor.addEventListener('change', function(){
            text.style.color = getColor.value;
            localStorage.setItem('color', getColor.value);          
        })
    }

    function changeFontSize() {
        let getFontSize = document.querySelector('#font-size');
        getFontSize.addEventListener('change', function(){
            text.style.fontSize = getFontSize.value;           
            localStorage.setItem('fontSize',getFontSize.value);
        })
    }

    function changeLineHeight(){
        let inputLineHeight = document.querySelector('#lineHeight')
        console.log(inputLineHeight)
        inputLineHeight.addEventListener('change', function(){
            text.style.lineHeight = inputLineHeight.value;
            localStorage.setItem('lineHeight',inputLineHeight.value)
        })
    }

    function changFontFamily(){
        let getFontFamily = document.querySelector('#fontFamily');
        getFontFamily.addEventListener('change', function(){
            text.style.fontFamily = getFontFamily.value
            localStorage.setItem('fontFamily', getFontFamily.value);
        })
    }

 //Recupera o backgroundColor do localStorage
 let savedBackgroundColor = localStorage.getItem('backgroundColor');
 text.style.backgroundColor = savedBackgroundColor;

 //Recupera a cor da fonte do localStorage;
let savedColor = localStorage.getItem('color');
console.log(localStorage.getItem('color'))
text.style.color = savedColor;
 console.log(savedColor)

 //Recupera o tamanho da fonte;
let savedFontSize = localStorage.getItem('fontSize');
text.style.fontSize = savedFontSize;

//Recupera o espaçamento entre as linhas;
let savedLineHeight = localStorage.getItem('lineHeight');
text.style.lineHeight = savedLineHeight;

//Recupera a font-vamily;
let savedFontFamily = localStorage.getItem('fontFamily');
text.style.fontFamily = savedFontFamily;
backgroundColor()
changeColor()
changeFontSize()
changeLineHeight()
changFontFamily ()
}