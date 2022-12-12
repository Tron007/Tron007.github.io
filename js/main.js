const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () =>{
    if(nav.classList.toggle('open')){
        navBtnImg.src = "./img/nav-close.svg";
    }
    else{
        navBtnImg.src = "./img/nav-open.svg";
    }
}

function lifeSite() {
    var start = new Date('December 12, 2022');
    var end = new Date();
    var life = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    var suffix = new Array("день", "дня", "дней");
    var keys = [2, 0, 1, 1, 1, 2];
    var mod = life % 100;
    var suffix_key = mod > 4 && mod < 20 ? 2 : keys[Math.min(mod%10, 5)];
    document.getElementById("life_site").innerHTML = life + " " + suffix[suffix_key];
}

AOS.init({
    once: true
});