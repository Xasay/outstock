
$(document).ready(function(){
    /*submenular sehife load olandan sonra yuklensin  */
       $(window).load(()=>{
           setTimeout(()=>{
                $('.scarf_moss_submenu').addClass('show');
                $('.chair_kimi_submenu').addClass('show');
                $('.shop_all_dropdown').addClass('show');
    
           },1000)
       })
    
    /**** Search hissesi ***/
       function showSearch(){
       
        $('.search_input').toggleClass('show')
       }
    
      
    
       $('.search_btn_container').click(()=>{
           showSearch()
       })
    
       $('*').click(function(e){
       
            if( $('.search_input').css('display')!='none' 
            && !$(e.target).is('.search_input') 
            && !$(e.target).is('.search_input *')
            && !$(e.target).is('.search_btn_container')
            && !$(e.target).is('.search_btn_container *') )
                { $('.search_input').removeClass('show'); }
       
           
       })
    /*cart hissesi*/
       $('.cart_btn_container').click(()=>{
           $('.cart_info').toggleClass('show');
       });
    
       $('*').click(function(e){
    
           if( $('.cart_info').css('display')!='none'
               &&!$(e.target).is('.cart_info') 
               && !$(e.target).is('.cart_info *')
               && !$(e.target).is('.cart_btn_container') 
               && !$(e.target).is('.cart_btn_container *')  )
               {$('.cart_info').removeClass('show');}
       })
    
    
    /* menu button hissesi */
    $('.menu_btn_container').click(()=>{
        $('.menu_btn_in').toggleClass('show');
    })
    
    $('*').click(function(e){
        if(
            $('.menu_btn_in').css('display')!='none'
            && !$(e.target).is('.menu_btn_in')
            && !$(e.target).is('.menu_btn_in *')
            && !$(e.target).is('.menu_btn_container')
            && !$(e.target).is('.menu_btn_container *')
        ){
                $('.menu_btn_in').removeClass('show');
               
            }
            
        
    });



    $('.mobile_menu_in_list_item_main').on('click',function(){

        $(this).siblings().toggleClass('show');
        if($(this).siblings().css('display')=='block'){
            
            $(this).find('.fas.fa-angle-down').css({'transform':'rotate(180deg)'});
        }
        else{  
            $(this).find('.fas.fa-angle-down').css({'transform':'rotate(0deg)'})
        }


    })


    function openMenu(){
        $('.mobile_menu_box').addClass('show');

        setTimeout(()=>{
            $('.mobile_menu_box').css({'transform':'translateX(0%)'});
        },100);
    }


    


    $('.mobile_menu').on('click',function(){
        
       openMenu();

    });


    function closeMenu(){
        $('.mobile_menu_box').css({'transform':'translateX(-100%)'});
        setTimeout(()=>{
            $('.mobile_menu_box').removeClass('show');
        },300)
    };


    $('#close_mobile').on('click',function(){
        closeMenu();
    });


    $('*').on('click',function(e){

        if(!$(e.target).is('.mobile_menu_btn') && !$(e.target).is('.mobile_menu_btn *') &&
        !$(e.target).is('.mobile_menu_in') && !$(e.target).is('.mobile_menu_in * ') ){
            closeMenu();
        };
        

    })


    $(window).resize(function(){
        closeMenu();
    });



    
    
    });