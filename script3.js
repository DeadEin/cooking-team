var text = " Приготування наполеона";  
var delay = 100;   
var elem = document.getElementById("result.napoleon");  
   
var print_text = function(text, elem, delay) {  
    if(text.length > 0) {  
        elem.innerHTML += text[0];  
        setTimeout(  
            function() {  
                print_text(text.slice(1), elem, delay);   
            }, delay  
        );  
    }  
}  
print_text(text, elem, delay);
