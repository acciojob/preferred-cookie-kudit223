const fontsize=document.querySelector('#fontsize');
const fontcolor=document.querySelector('#fontcolor');
const btn=document.querySelector("input[type='submit']")

btn.addEventListener('click',save)

function save(){
    let fontsizeValue=fontsize.value;
    let fontcolorValue=fontcolor.value;

    document.cookie=`font-size=${fontsizeValue}`
    document.cookie=`font-color=${fontcolorValue}`;
    
}

function render(){
    if(document.cookie){
        let arr=document.cookie.split(';')
        fontsize.value=arr[0].split('=')[1];
        fontcolor.value=arr[1].split('=')[1];
    }
}
render()