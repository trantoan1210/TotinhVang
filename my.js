let X=0
function setRandomPosition(){
    document.getElementById("btn-no").style.top = Math.floor(Math.random() * 200) + "px";
    document.getElementById("btn-no").style.left = Math.floor(Math.random() * 1000) + "px";
    switch (X) {
        case 7:
            document.getElementById("content").innerHTML="Thôi đừng từ chối nữa, bấm nút còn lại nào^^"
        break;
        case 9:
            document.getElementById("content").innerHTML="Haizz, anh bảo rồi!!Đừng cố chấp nữa, Bấm nút còn lại nào^^!!"
        break;
        case 20:
            document.getElementById("content").innerHTML="Giờ từ chối thử xem^^ hehe"
            document.getElementById("btn-no").style.display= 'none'
        break;
    
        }
    
    X++
    }
function yess(){
 document.write("Cảm ơn em")
}