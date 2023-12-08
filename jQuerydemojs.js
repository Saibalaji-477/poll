$(Document).ready(function() {
    $('i').mouseout(function(){
       
        $(this).toggleClass('fa-envelope');
        
    });
    $(document).ready(function() {
        //keydown, keyup
        $('#example').on('keyup', 'input', function() {
            $('#result').html('Your name is: ' + $(this).val());
        });
    });
    $("p").mouseover(function(){
        
          $(this).css("background-color", "lightgray");
        
      });
      //mousenter, mouseleave
      $('h1').on({
        mouseenter: function(){ $('h1').css({'background-color':'orange','color':'white'});
        },
        mouseleave: function(){ $('h1').css({'background-color':'white','color':'blue'});}
    
    });

});
