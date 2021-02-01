$('#menubar ul li a').on('click',function(event){
    var $anchor = $(this);
    $('html, body').animate({
      scrollTop: $($anchor.attr('href')).offset().top + "px"
    }, 4500);
     event.preventDefault();
 });


// preveri če je vse vnešeno pravilno
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }
    //Funkcija da prikaže popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Funkcija da skrije popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }
  
