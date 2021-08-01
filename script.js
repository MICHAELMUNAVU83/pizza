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
    document.getElementById('taste').innerHTML=' CHEESE FLAVOR'

}
function flav(){
    let vegg = document.getElementById('veggie').value
    document.getElementById('taste').innerHTML='  VEGGIE FLAVOUR'

}
function flavv(){
    let roni = document.getElementById('pepper').value
    document.getElementById('taste').innerHTML='  PEPPERONI FLAVOUR'

}
function pla(){
    let meatt = document.getElementById('meat').value
    document.getElementById('taste').innerHTML='  MEAT FLAVOUR'

}
function plav(){
    let chic = document.getElementById('chick').value
    document.getElementById('taste').innerHTML='  BBQ CHICKEN FLAVOUR'

}
function plavv(){
    let hawian = document.getElementById('hawi').value
    document.getElementById('taste').innerHTML='  HAWAIIAN FLAVOUR'

}




function largeSize(){

    let biggest = document.getElementById('LargeSizePizza').value
    document.getElementById('pizzaSize').innerHTML='LARGE SIZE PIZZA'

}
function mediumSize(){

    let bigger = document.getElementById('MediumSizePizza').value
    document.getElementById('pizzaSize').innerHTML= 'MEDIUM SIZE PIZZA'
}
function smallSize(){

    let big = document.getElementById('SmallSizePizza').value
    document.getElementById('pizzaSize').innerHTML= 'SMALL SIZE PIZZA'
}


function stuffedCrust(){
    let size = document.getElementById('pizzaSize').innerHTML
    
    
    
   if(size== 'LARGE SIZE PIZZA' ) {
    document.getElementById('crustType').innerHTML='STUFFED CRUST'
    document.getElementById('crustPrice').innerHTML=  String(100) 
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('crustType').innerHTML='STUFFED CRUST'
    document.getElementById('crustPrice').innerHTML= String(70) 
       
   } else if(size== 'SMALL SIZE PIZZA') {
    document.getElementById('crustType').innerHTML='STUFFED CRUST'
    document.getElementById('crustPrice').innerHTML=  String (50)
       
   }
 
    
}

function crispedCrust(){
    let size = document.getElementById('pizzaSize').innerHTML
   
   
   if(size== 'LARGE SIZE PIZZA' ) {
    document.getElementById('crustType').innerHTML='CRISPED CRUST'

    document.getElementById('crustPrice').innerHTML= String(100) 
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('crustType').innerHTML='CRISPED CRUST'
    document.getElementById('crustPrice').innerHTML=  String(70) 
       
   } else if(size== 'SMALL SIZE PIZZA') {
    document.getElementById('crustType').innerHTML='CRISPED CRUST'
    document.getElementById('crustPrice').innerHTML= String(50)  
       
   }
   
}

function glutenFreeCrust(){
    

    let size = document.getElementById('pizzaSize').innerHTML
   if(size== 'LARGE SIZE PIZZA' ) {
       document.getElementById('crustType').innerHTML='GLUTEN -FREE CRUST'
    document.getElementById('crustPrice').innerHTML= String(100)
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('crustType').innerHTML='GLUTEN -FREE CRUST'
    document.getElementById('crustPrice').innerHTML= String(70)
       
   } else if(size== 'SMALL SIZE PIZZA'){
    document.getElementById('crustType').innerHTML='GLUTEN -FREE CRUST'
    document.getElementById('crustPrice').innerHTML= String(50)
       
   }
   
    
}




function sausageTopping(){
    let size = document.getElementById('pizzaSize').innerHTML
    
    
    
   if(size== 'LARGE SIZE PIZZA' ) {
    document.getElementById('toppingType').innerHTML='SAUSAGE TOPPINGS'

    document.getElementById('toppingPrice').innerHTML=  String(200) 
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('toppingType').innerHTML='SAUSAGE TOPPINGS'
    document.getElementById('toppingPrice').innerHTML= String(150) 
       
   } else if(size== 'SMALL SIZE PIZZA') {
    document.getElementById('toppingType').innerHTML='SAUSAGE TOPPINGS'
    document.getElementById('toppingPrice').innerHTML=  String (100)
       
   }
 
    
}

function mushroomTopping(){
    let size = document.getElementById('pizzaSize').innerHTML
   
   
   if(size== 'LARGE SIZE PIZZA' ) {
    document.getElementById('toppingType').innerHTML='MUSHROOM TOPPINGS'

    document.getElementById('toppingPrice').innerHTML= String(200) 
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('toppingType').innerHTML='MUSHROOM TOPPINGS'
    document.getElementById('toppingPrice').innerHTML=  String(150) 
       
   } else if(size== 'SMALL SIZE PIZZA') {
    document.getElementById('toppingType').innerHTML='MUSHROOM TOPPINGS'
    document.getElementById('toppingPrice').innerHTML= String(100)  
       
   }
   
}

function baconTopping(){
    

    let size = document.getElementById('pizzaSize').innerHTML
   if(size== 'LARGE SIZE PIZZA' ) {
       document.getElementById('toppingType').innerHTML='BACON TOPPINGS'

    document.getElementById('toppingPrice').innerHTML= String(200)
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('toppingType').innerHTML='BACON TOPPINGS'
    document.getElementById('toppingPrice').innerHTML= String(150)
       
   } else if(size== 'SMALL SIZE PIZZA'){
    document.getElementById('toppingType').innerHTML='BACON TOPPINGS'
    document.getElementById('toppingPrice').innerHTML= String(100)
       
   }
   
    
}

function cheeseTopping(){

    let size = document.getElementById('pizzaSize').innerHTML
   if(size== 'LARGE SIZE PIZZA' ) {
       document.getElementById('toppingType').innerHTML='Extra Cheese Topping'

    document.getElementById('toppingPrice').innerHTML= String(200)
   } else if (size == 'MEDIUM SIZE PIZZA') {
    document.getElementById('toppingType').innerHTML='Extra Cheese Topping'
    document.getElementById('toppingPrice').innerHTML= String(150)
       
   } else if(size== 'SMALL SIZE PIZZA'){
    document.getElementById('toppingType').innerHTML='Extra Cheese Topping'
    document.getElementById('toppingPrice').innerHTML= String(100)
       
   }

}


function checkOut(){

    let size = document.getElementById('pizzaSize').innerHTML
    if(size==='LARGE SIZE PIZZA'){
        document.getElementById('pizzaPrice').innerHTML=String(1100)
    }else if (size == 'MEDIUM SIZE PIZZA') {
        document.getElementById('pizzaPrice').innerHTML=String(800)
        
    } else if(size== 'SMALL SIZE PIZZA') {
        document.getElementById('pizzaPrice').innerHTML=String(500)
    
        
    }
    let num1 = document.getElementById('num').value
    let priceOne = parseInt(document.getElementById('toppingPrice').innerHTML ) + parseInt( document.getElementById('pizzaPrice').innerHTML ) + 
    parseInt(document.getElementById('crustPrice').innerHTML)
    let priceOneString = String(priceOne)
    let total = parseInt(priceOne) * num1
    document.getElementById('fullCost').innerHTML= total 
    document.getElementById('pizzaPriceTopCrust').innerHTML= priceOneString 
    document.getElementById('totalCost').innerHTML=' TOTAL AMOUNT TO BE PAID FOR ' + ' ' + num1 + ' '+' PIZZA(S) IS :' + ' ' + total 
    
    
 }

 function pick(){


    swal({
        title: "ORDER COMPLETE!!",
        text :  'THANK YOU FOR YOUR ORDER OF ' + ' ' +
        document.getElementById('num').value + ' ' + document.getElementById('taste').innerHTML
        + ' ' + ',' + document.getElementById('pizzaSize').innerHTML + ' ' + 'WITH' + ' '
        + document.getElementById('toppingType').innerHTML + ' ' + 'AND A ' +
        document.getElementById('crustType').innerHTML + '.' + ' ' +
        'YOUR PIZZA WILL BE READY IN TEN MINUTES AND THE TOTAL COST WILL BE' + ' '
        + document.getElementById('fullCost').innerHTML + '/='
    
     ,
        icon: "success",
      });
    
 }

function deliv(){
    alert('Delivery cost is Two Hundred')
    let answer = prompt('Where do You want Your Pizza Delivered')
    document.getElementById('promptAnswer').innerHTML= answer
    
    let deliver = (  parseInt(document.getElementById('fullCost').innerHTML  ) + 200 )
    document.getElementById('del').innerHTML= deliver
    document.getElementById('deliveryFee').innerHTML = 'TOTAL AMOUNT PLUS DELIVERY FEE IS ' + ' ' + deliver


    swal({
        title: "ORDER AND DELIVERY REQUEST RECEIVED!",
        text: 'THANK YOU FOR YOUR ORDER OF ' + ' ' +
        document.getElementById('num').value + ' ' + document.getElementById('taste').innerHTML
        + ' ' + ',' + document.getElementById('pizzaSize').innerHTML + ' ' + 'WITH' + ' '
        + document.getElementById('toppingType').innerHTML + ' ' + 'AND A ' +
        document.getElementById('crustType').innerHTML + '.' + ' ' +
        'YOUR PIZZA WILL BE DELIVERED TO ' + ' '  + document.getElementById('promptAnswer').innerHTML + ' '
        + 'AND TOTAL COST WILL BE' + ' ' +  document.getElementById('del').innerHTML + '.'
    
    ,
        icon: "success",
        button: "OKAY!!",
      });




    





}



