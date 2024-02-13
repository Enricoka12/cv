let newdate =  new Date().getFullYear();

let datum = document.getElementById("datum")

datum.innerHTML = "© " + newdate + " Boros Enrico";

console.log(newdate)






    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
      /* Check the location of each desired element */
      $('.fade').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object-650 ){
              
              $(this).animate({'opacity':'1'},1200);
              
                  
          }
          
      }); 
  
  });

  




//EMAIL

  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var message = document.getElementById('uzenet').value;
    var emailSubject = "Üzenet"; // Az e-mail tárgya

    // Összeállítjuk az e-mail címet és a tárgyat a mailto link számára
    var mailtoLink = 'mailto:cel@email.hu' +
        '?subject=' + encodeURIComponent(emailSubject) +
        '&body=' + encodeURIComponent(message);

    // Megnyitjuk az e-mail alkalmazást az elkészített mailto linkkel
    window.location.href = mailtoLink;
});