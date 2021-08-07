$(document).ready(function(){

    $('.category_btn').on('click',function(){
        
       
        $(this).parent().siblings().toggle();
        // $(this).parent().siblings().toggleClass('rotate');

        if($(this).parent().siblings().css('display')=='none'){
            $(this).css({'transform':'rotate(0deg)'});
        }
        else{
            $(this).css({'transform':'rotate(90deg)'});
        }

       
    });



    $('.second_button').on('click',function(){

        $('.second_block').css({'transform':'translateX(0%)','visibility':'visible','opacity':'1'});
        $('.first_block').css({'transform':'translateX(-106%)','visibility':'hidden','opacity':'0'});
        $(this).css({'visibility':'hidden'});
        $('.first_button').css({'visibility':'visible'});


    });

    $('.first_button').on('click',function(){
        $('.first_block').css({'transform':'translateX(0%)','visibility':'visible','opacity':'1'});
        $('.second_block').css({'transform':'translateX(106%)','visibility':'hidden','opacity':'0'})
        $(this).css({'visibility':'hidden'});
        $('.second_button').css({'visibility':'visible'});
    })




    function openSidebar(){
        $('.side_bar').addClass('show');

            setTimeout(()=>{
                $('.side_bar').css({'transform':'translateX(0%)'});
            },100);
    }

    function closeSidebar(){
        $('.side_bar').css({'transform':'translateX(-100%)'});
        setTimeout(()=>{
            $('.side_bar').removeClass('show');
        },300)
    };

    $('.sidebar_open').on('click',function(){
       openSidebar();
    })



    $('*').on('click',function(e){

        if(!$(e.target).is('.sidebar_open') &&  
        !$(e.target).is('.aside_bottom') && !$(e.target).is('.aside_bottom * ') ){
            closeSidebar();
        };
        

    })

    $(window).resize(function(){
        closeSidebar();
    });

})