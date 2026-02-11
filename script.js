const fontsize=document.querySelector('#fontsize');
const fontcolor=document.querySelector('#fontcolor');

function save(){
    let fontsizeValue=fontsize.value;
    let fontcolorValue=fontcolor.value;

    document.cookie=`fontsize=${fontsizeValue}`
    document.cookie=`fontcolor=${fontcolorValue}`;
    
}

function render(){
    if(document.cookie){
        let arr=document.cookie.split(';')
        fontsize.value=arr[0].split('=')[1];
        fontcolor.value=arr[1].split('=')[1];
    }
}
render()