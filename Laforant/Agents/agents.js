    $(document).ready(function(){
    
    let totalSlide = $('.slider div.slides div.slide').length
    let slideWidth = $('.slider div.slides div.slide').width()
    let slideHeight = $('.slider div.slides div.slide').height()
    let totalwidth = totalSlide * slideWidth

    console.log(slideWidth)
    console.log(slideHeight)
    console.log(totalSlide)

    $('.slider').css({width : slideWidth, height : slideHeight})
    $('.slider div.slides').css({width : totalwidth , marginLeft : -slideWidth})
    $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')

    $('#prev-btn').click(function(){
        $('.slider div.slides').animate({
            left : slideWidth
        },1000 , function(){
            $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')
            $('.slider div.slides').css({left : ''})
        })
    })

    $('#next-btn').click(function(){
        $('.slider div.slides').animate({
            left : -slideWidth
        },1000, function(){
            $('.slider div.slides div.slide:first-child').appendTo('.slider div.slides')
            $('.slider div.slides').css({left : ''})
        })
    })
})

let state = false;

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
