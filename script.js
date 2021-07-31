$(document).ready (function(){

    
    

    $('#oli').hide()


    $('#oliv').click(function(){

        $('#oli').toggle()
    })
    $('#oli').mouseleave(function(){
        $('#oli').fadeOut()


    })

    $('#cra').hide()


    $('#craa').click(function(){

        $('#cra').toggle()
    })
    $('#cra').mouseleave(function(){
        $('#cra').fadeOut()


    })


      $('#pri').hide()


    $('#prii').click(function(){

        $('#pri').toggle()
    })
    $('#pri').mouseleave(function(){
        $('#pri').fadeOut()


    })

    $('#piz').hide()


    $('#pizz').click(function(){

        $('#piz').toggle()
    })
    $('#piz').mouseleave(function(){
        $('#piz').fadeOut()


    })
    
}) 


function fla(){
    let che = document.getElementById('cheese').value
    document.getElementById('tas').innerHTML=' CHEESE FLAVOR'

}
function flav(){
    let vegg = document.getElementById('veggie').value
    document.getElementById('tas').innerHTML='  VEGGIE FLAVOUR'

}
function flavv(){
    let roni = document.getElementById('pepper').value
    document.getElementById('tas').innerHTML='  PEPPERONI FLAVOUR'

}
function pla(){
    let meatt = document.getElementById('meat').value
    document.getElementById('tas').innerHTML='  MEAT FLAVOUR'

}
function plav(){
    let chic = document.getElementById('chick').value
    document.getElementById('tas').innerHTML='  BBQ CHICKEN FLAVOUR'

}
function plavv(){
    let hawian = document.getElementById('hawi').value
    document.getElementById('tas').innerHTML='  HAWAIIAN FLAVOUR'

}




function pep(){



    let biggest = document.getElementById('LargeSizePizza').value
    document.getElementById('resu').innerHTML='LARGE SIZE PIZZA'

  
    
}
function pepp(){

    let bigger = document.getElementById('MediumSizePizza').value
    document.getElementById('resu').innerHTML= 'MEDIUM SIZE PIZZA'
}
function peppp(){

    let big = document.getElementById('SmallSizePizza').value
    document.getElementById('resu').innerHTML= 'SMALL SIZE PIZZA'
}


function cr(){
    let price = document.getElementById('resu').innerHTML
    
    
    
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('krast').innerHTML='STUFFED CRUST'
    document.getElementById('kra').innerHTML=  String(100) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('krast').innerHTML='STUFFED CRUST'
    document.getElementById('kra').innerHTML= String(70) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('krast').innerHTML='STUFFED CRUST'
    document.getElementById('kra').innerHTML=  String (50)
       
   }
 
    
}

function cru(){
    let price = document.getElementById('resu').innerHTML
   
   
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('krast').innerHTML='CRISPED CRUST'

    document.getElementById('kra').innerHTML= String(100) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('krast').innerHTML='CRISPED CRUST'
    document.getElementById('kra').innerHTML=  String(70) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('krast').innerHTML='CRISPED CRUST'
    document.getElementById('kra').innerHTML= String(50)  
       
   }
   
}

function crus(){
    

    let price = document.getElementById('resu').innerHTML
   if(price== 'LARGE SIZE PIZZA' ) {
       document.getElementById('krast').innerHTML='GLUTEN -FREE CRUST'
    document.getElementById('kra').innerHTML= String(100)
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('krast').innerHTML='GLUTEN -FREE CRUST'
    document.getElementById('kra').innerHTML= String(70)
       
   } else if(price== 'SMALL SIZE PIZZA'){
    document.getElementById('krast').innerHTML='GLUTEN -FREE CRUST'
    document.getElementById('kra').innerHTML= String(50)
       
   }
   
    
}




function sas(){
    let price = document.getElementById('resu').innerHTML
    
    
    
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('reason').innerHTML='SAUSAGE TOPPINGS'

    document.getElementById('top').innerHTML=  String(200) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='SAUSAGE TOPPINGS'
    document.getElementById('top').innerHTML= String(150) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('reason').innerHTML='SAUSAGE TOPPINGS'
    document.getElementById('top').innerHTML=  String (100)
       
   }
 
    
}

function sass(){
    let price = document.getElementById('resu').innerHTML
   
   
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('reason').innerHTML='MUSHROOM TOPPINGS'

    document.getElementById('top').innerHTML= String(200) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='MUSHROOM TOPPINGS'
    document.getElementById('top').innerHTML=  String(150) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('reason').innerHTML='MUSHROOM TOPPINGS'
    document.getElementById('top').innerHTML= String(100)  
       
   }
   
}

function sasss(){
    

    let price = document.getElementById('resu').innerHTML
   if(price== 'LARGE SIZE PIZZA' ) {
       document.getElementById('reason').innerHTML='BACON TOPPINGS'

    document.getElementById('top').innerHTML= String(200)
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='BACON TOPPINGS'
    document.getElementById('top').innerHTML= String(150)
       
   } else if(price== 'SMALL SIZE PIZZA'){
    document.getElementById('reason').innerHTML='BACON TOPPINGS'
    document.getElementById('top').innerHTML= String(100)
       
   }
   
    
}

function sassss(){

    let price = document.getElementById('resu').innerHTML
   if(price== 'LARGE SIZE PIZZA' ) {
       document.getElementById('reason').innerHTML='Extra Cheese Topping'

    document.getElementById('top').innerHTML= String(200)
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Extra Cheese Topping'
    document.getElementById('top').innerHTML= String(150)
       
   } else if(price== 'SMALL SIZE PIZZA'){
    document.getElementById('reason').innerHTML='Extra Cheese Topping'
    document.getElementById('top').innerHTML= String(100)
       
   }

}


function zote(){

    let price = document.getElementById('resu').innerHTML
    if(price==='LARGE SIZE PIZZA'){
        document.getElementById('menuu').innerHTML=String(1100)
    }else if (price == 'MEDIUM SIZE PIZZA') {
        document.getElementById('menuu').innerHTML=String(800)
        
    } else if(price== 'SMALL SIZE PIZZA') {
        document.getElementById('menuu').innerHTML=String(500)
    
        
    }
    let num1 = document.getElementById('num').value
   
   
    let vv = parseInt(document.getElementById('top').innerHTML ) + parseInt( document.getElementById('menuu').innerHTML ) + 
    parseInt(document.getElementById('kra').innerHTML)
    let vvv= String(vv)
    let kk= parseInt(vv) * num1
    document.getElementById('kkk').innerHTML= kk
    document.getElementById('pop').innerHTML= vvv
    document.getElementById('kim').innerHTML=' TOTAL AMOUNT TO BE PAID FOR ' + ' ' + num1 + ' '+' PIZZA(S) IS :' + ' ' + kk
    
    
 }

 function pick(){


    swal({
        title: "ORDER COMPLETE!!",
        text :  'THANK YOU FOR YOUR ORDER OF ' + ' ' +
        document.getElementById('num').value + ' ' + document.getElementById('tas').innerHTML
        + ' ' + ',' + document.getElementById('resu').innerHTML + ' ' + 'WITH' + ' '
        + document.getElementById('reason').innerHTML + ' ' + 'AND A ' +
        document.getElementById('krast').innerHTML + '.' + ' ' +
        'YOUR PIZZA WILL BE READY IN TEN MINUTES AND THE TOTAL COST WILL BE' + ' '
        + document.getElementById('kkk').innerHTML + '/='
    
     ,
        icon: "success",
      });
    
 }
function deliv(){
    alert('Delivery cost is Two Hundred')
    let pro = prompt('Where do You want Your Pizza Delivered')
    document.getElementById('proo').innerHTML= pro
    
    let deliver = (  parseInt(document.getElementById('kkk').innerHTML  ) + 200 )
    document.getElementById('del').innerHTML= deliver
    document.getElementById('kutuma').innerHTML = 'TOTAL AMOUNT PLUS DELIVERY FEE IS ' + ' ' + deliver


    swal({
        title: "ORDER AND DELIVERY REQUEST RECEIVED!",
        text: 'THANK YOU FOR YOUR ORDER OF ' + ' ' +
        document.getElementById('num').value + ' ' + document.getElementById('tas').innerHTML
        + ' ' + ',' + document.getElementById('resu').innerHTML + ' ' + 'WITH' + ' '
        + document.getElementById('reason').innerHTML + ' ' + 'AND A ' +
        document.getElementById('krast').innerHTML + '.' + ' ' +
        'YOUR PIZZA WILL BE DELIVERED TO ' + ' '  + document.getElementById('proo').innerHTML + ' '
        + 'AND TOTAL COST WILL BE' + ' ' +  document.getElementById('del').innerHTML + '.'
    
    ,
        icon: "success",
        button: "OKAY!!",
      });




    





}



