var nama = prompt("Masukan Nama Anda?");

if(nama == "Fauz"){
    document.write(age);
    var age = prompt("Masukan Umur Anda");
    if(age > 17) {
        alert("Anda hanya bisa memesan anggur");
        var anggur = prompt("Masuka uang anda!");
        if(anggur >= 300000) {
            var sisa = anggur - 300000;
            alert("Anda bisa minum, sisa uang anda" + sisa);
        }
        else {
            alert("uang anda tidak cukup, anda harus pulang");
        }
    }
    else {
        alert("anda hanya bisa memesan juice");
        var juice = prompt("masukan uang anda!");
        if(juice >= 50000) {
            var sia = juice - 50000;
            alert("anda bisa minum, sisa uang anda" + sisa)
        }
        else{
            alert(" uang anda tidak cukup, anda harus pulang");
        }
    }
}
else {
    document.write("<h2>anda tidak boleh masuk!!<h2>");
}