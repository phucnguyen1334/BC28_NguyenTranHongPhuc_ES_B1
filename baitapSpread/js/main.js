let str = document.querySelector('.heading').innerHTML;
let char = [ ...str ];
let renderSpan = () => {
    //input: char[]
    //output: html <span>H</span> ...
    let html = '';
    for(var i = 0; i < char.length; i++){
        var ch = char[i];
        html += `
            <span>${ch}</span>
        `
    }
    //in ra man hinh
    document.querySelector('.heading').innerHTML = html;
}

window.onload = function(){
    renderSpan();
}