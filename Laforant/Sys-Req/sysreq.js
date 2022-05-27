let state = false

function toogleNavbarNav(){
    let nav = document.getElementById("dropdown-menu");
    let div = document.getElementById("navbar-nav-nav");

    if(state == false){ //blom muncul
        nav.style.display = 'flex';
        div.style.width ='80px';
        state = true;
        
    }else if ( state == true){ //uda muncul
        nav.style.display = 'none';
        // div.style.width= 'auto';
        state = false;
        // div.style.width ='30%';
    }


}

function scroll(){
    let nav = document.getElementById("dropdown-menu");
    if(state == true){
        nav.style.display = 'none';
    }
}