const fontsize=document.querySelector('#fontsize');
const fontcolor=document.querySelector('#fontcolor');
const btn=document.querySelector("input[type='submit']")
const body=document.querySelector('body')

btn.addEventListener('click',save)

function save(){
    let fontsizeValue=fontsize.value;
    let fontcolorValue=fontcolor.value;

    document.cookie=`fontsize=${fontsizeValue}`
    document.cookie=`fontcolor=${fontcolorValue}`;
    
}

function render(){
    if(document.cookie){
        let arr=document.cookie.split(';')
        body.style.fontSize=`${arr[0].split('=')[1]}px`;
        body.style.color=arr[1].split('=')[1];
    }
}
render()