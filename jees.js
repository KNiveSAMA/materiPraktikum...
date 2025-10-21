function pring(){
    alert("Welcome to Pubg mobile, to Pubg mobile, Game pubg game pubg")
}

function terima(){
    var name=confirm("Masuk euy");
    if(name == true){
        document.write("Terima")
    }else{
        document.write("Batal")
    }    
}

function gpt(){
    var nama=prompt("MAsukan nama penuh")
    if(name != null && name!= ""){
        document.write("Selamat datang qaqaq " + name)
    }
}

var hafalan = ["kecipak kecipak pantai anyer "," ribit ribit hutan kalimantan "," Angrek mekar pontianak "];

//menambah element di aakir
hafalan.push(" Roti o lempuyangan");

//menghapus element di akhir
// hafalan.pop();

//menambah element di awal
hafalan.unshift("jesgejes wonogiri")

//menghapus element di awal
hafalan.shift()

//dibolak balik seakin asik
hafalan.reverse();

//menampilkan element array
document.write(hafalan);

//menampilkan index element array
document.write(hafalan.indexOf("jesgejes wonogiri"));

//object
var member={nama:"mas amba",poss:"Center",block:"3"}
console.log(member)

var member=new Object();
member.nama="Rusdy";
member.poss="support";
member.block="7";

document.write(member.nama)
document.write(member.poss)
document.write(member.block)

var txt="";
for (var key in member){
    txt += member[key]+"";
}
document.write(txt) ;

//dom
function lapmpu(){
    const lamdu=document.getElementById("lampu");
    const butt=document.getElementById("butoh");

    if(!lampunyala){
        lamdu.src="gfjg.png" 
        butt.innerText="matikan lampu" 
        butt.classlist.remove("on") 
        lampunyala=true;
    }else{
        
        lamdu.src="gkjfk.png" 
        but.innerText="nyalakan lampu" 
        but.classlist.remove("off") 
        lampunyala=false;
    }
}