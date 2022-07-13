$(document).ready(function () {

var cookie = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
if(cookie.language.trim()=='EN'){
  $(".message").text("Map research");
  var lang = $(".language" ).attr('id');
 $('path').each(function(index, item) {
        
       $(this).attr("name",(arrLang['EN'][$(this).attr('name')]));
      });
}
    
    
   var PartE;

    
          

     
          $( "path" ).addClass("hov");
          $( "path" ).bind('click', SearchPart);
          function SearchPart(e){
              var Target = $(e.target);
              PartName = Target.attr('name');
              PartE=PartName.replace('Rayon', ' Rayon');

              $(".AskPart").text(PartE);
              
              
          }
          
    
    });