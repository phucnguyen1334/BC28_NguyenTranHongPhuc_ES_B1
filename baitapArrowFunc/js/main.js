const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 
'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];
let renderButton = () => {
    //input: colorList[]
    //output: html <button>pallet</button> ...
    let html = '';
    for(var i = 0; i < colorList.length; i++){
        var color = colorList[i];
        html += `
            <button class="color-button ${color}" onclick="changeColor('${color}')"></button>
        `
    }
    //in ra man hinh
    document.querySelector('#colorContainer').innerHTML = html;
}

window.changeColor = (color) => {
    let cls = document.querySelector('.house');
    cls.classList.add(color);
}
window.onload = function(){
    renderButton();
}