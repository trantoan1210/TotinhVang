let X=0
document.getElementById("dongy").style.display= 'none'
function setRandomPosition(){
    document.getElementById("btn-no").style.top = Math.floor(Math.random() * 100) + "%";
    document.getElementById("btn-no").style.left = Math.floor(Math.random() * 100) + "%";
    switch (X) {
        case 7:
            document.getElementById("title").innerHTML="Thôi đừng từ chối nữa, bấm nút còn lại nào^^"
        break;
        case 9:
            document.getElementById("title").innerHTML="Haizz, anh bảo rồi!!Đừng cố chấp nữa, Bấm nút còn lại nào^^!!"
        break;
        case 15:
            document.getElementById("title").innerHTML="Giờ từ chối thử xem^^ hehe"
            document.getElementById("btn-no").style.display= 'none'
        break;
    
        }
    
    X++
    }
function yess(){
    document.getElementById("dongy").style.display= 'block'
    document.getElementById("totinh").style.display= 'none'
    }