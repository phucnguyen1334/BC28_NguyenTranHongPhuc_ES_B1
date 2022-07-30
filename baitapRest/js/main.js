document.querySelector('#btnKhoi1').onclick = function(){
    var diemT = Number(document.querySelector('#inpToan').value);
    var diemL = Number(document.querySelector('#inpLy').value);
    var diemH = Number(document.querySelector('#inpHoa').value);
    tinhDiem(diemT,diemL,diemH);
}
document.querySelector('#btnKhoi2').onclick = function(){
    var diemV = Number(document.querySelector('#inpVan').value);
    var diemS = Number(document.querySelector('#inpSu').value);
    var diemD = Number(document.querySelector('#inpDia').value);
    var diemE = Number(document.querySelector('#inpEnglish').value);
    tinhDiem(diemV,diemS,diemD,diemE);
}
let tinhDiem = (...danhSachDiem) => {
    switch(danhSachDiem.length){
        case 3:{
            let DTB = (danhSachDiem[0] + danhSachDiem[1] + danhSachDiem[2])/3;
            document.querySelector('#tbKhoi1').innerHTML = DTB;
            break;
        }
        case 4:{
            let DTB = (danhSachDiem[0] + danhSachDiem[1] + danhSachDiem[2] + danhSachDiem[3])/4;
            document.querySelector('#tbKhoi2').innerHTML = DTB;
            break;
        }
        default:{
            console.log('Tham so khong hop le');
            break;
        }
    }
}