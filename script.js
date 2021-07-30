
function fla(){
    let che = document.getElementById('cheese').value
    document.getElementById('tas').innerHTML='SELECTED PIZZA IS CHEESE FLAVOR'

}
function flav(){
    let vegg = document.getElementById('veggie').value
    document.getElementById('tas').innerHTML='SELECTED PIZZA IS VEGGIE FLAVOR'

}
function flavv(){
    let roni = document.getElementById('pepper').value
    document.getElementById('tas').innerHTML='SELECTED PIZZA IS PEPPERONI FLAVOR'

}
function pla(){
    let meatt = document.getElementById('meat').value
    document.getElementById('tas').innerHTML='SELECTED PIZZA IS MEAT FLAVOR'

}
function plav(){
    let chic = document.getElementById('chick').value
    document.getElementById('tas').innerHTML='SELECTED PIZZA IS BBQ CHICKEN FLAVOR'

}
function plavv(){
    let hawian = document.getElementById('hawi').value
    document.getElementById('tas').innerHTML='SELECTED PIZZA IS HAWAIIAN FLAVOR'

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
    document.getElementById('krast').innerHTML='Your Crust is Stuffed.'
    document.getElementById('kra').innerHTML=  String(100) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('krast').innerHTML='Your Crust is Stuffed.'
    document.getElementById('kra').innerHTML= String(70) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('krast').innerHTML='Your Crust is Stuffed.'
    document.getElementById('kra').innerHTML=  String (50)
       
   }
 
    
}

function cru(){
    let price = document.getElementById('resu').innerHTML
   
   
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('krast').innerHTML='Your Crust is Crisped.'

    document.getElementById('kra').innerHTML= String(100) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('krast').innerHTML='Your Crust is Crisped.'
    document.getElementById('kra').innerHTML=  String(70) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('krast').innerHTML='Your Crust is Crisped.'
    document.getElementById('kra').innerHTML= String(50)  
       
   }
   
}

function crus(){
    

    let price = document.getElementById('resu').innerHTML
   if(price== 'LARGE SIZE PIZZA' ) {
       document.getElementById('krast').innerHTML='Your Crust is Gluten-free.'
    document.getElementById('kra').innerHTML= String(100)
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('krast').innerHTML='Your Crust is Gluten-free.'
    document.getElementById('kra').innerHTML= String(70)
       
   } else if(price== 'SMALL SIZE PIZZA'){
    document.getElementById('krast').innerHTML='Your Crust is Gluten-free.'
    document.getElementById('kra').innerHTML= String(50)
       
   }
   
    
}




function sas(){
    let price = document.getElementById('resu').innerHTML
    
    
    
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('reason').innerHTML='Your toppings are sausages'

    document.getElementById('top').innerHTML=  String(200) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Your topping are sausages'
    document.getElementById('top').innerHTML= String(150) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Your topping are sausages'
    document.getElementById('top').innerHTML=  String (100)
       
   }
 
    
}

function sass(){
    let price = document.getElementById('resu').innerHTML
   
   
   if(price== 'LARGE SIZE PIZZA' ) {
    document.getElementById('reason').innerHTML='Your toppings are Mushrooms'

    document.getElementById('top').innerHTML= String(200) 
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Your toppings are Mushrooms'
    document.getElementById('top').innerHTML=  String(150) 
       
   } else if(price== 'SMALL SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Your toppings are Mushrooms'
    document.getElementById('top').innerHTML= String(100)  
       
   }
   
}

function sasss(){
    

    let price = document.getElementById('resu').innerHTML
   if(price== 'LARGE SIZE PIZZA' ) {
       document.getElementById('reason').innerHTML='Your topping is Bacon.'

    document.getElementById('top').innerHTML= String(200)
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Your topping is Bacon.'
    document.getElementById('top').innerHTML= String(150)
       
   } else if(price== 'SMALL SIZE PIZZA'){
    document.getElementById('reason').innerHTML='Your topping is Bacon.'
    document.getElementById('top').innerHTML= String(100)
       
   }
   
    
}

function sassss(){

    let price = document.getElementById('resu').innerHTML
   if(price== 'LARGE SIZE PIZZA' ) {
       document.getElementById('reason').innerHTML='Your topping is Extra Cheese.'

    document.getElementById('top').innerHTML= String(200)
   } else if (price == 'MEDIUM SIZE PIZZA') {
    document.getElementById('reason').innerHTML='Your topping is Extra Cheese.'
    document.getElementById('top').innerHTML= String(150)
       
   } else if(price== 'SMALL SIZE PIZZA'){
    document.getElementById('reason').innerHTML='Your topping is Extra Cheese.'
    document.getElementById('top').innerHTML= String(100)
       
   }

}



