//     if ($(window).width() < 700) {
//         console.log(111);
//   $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
//}
// if (window.matchMedia("(orientation: portrait)").matches) {
//     $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
//     console.log(111);
//  }
//    $( window ).on( "orientationchange", function( event ) {
//         if (window.matchMedia("(orientation: portrait)").matches) {
//             
//             $('head').remove('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
//             console.log(111);
//  }
//
//  else if (window.matchMedia("(orientation: landscape)").matches) {
//      
//  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
//      console.log(333);
//  }
//        
//    });


$(document).ready(function () {


var cookie = document.cookie
  .split(';')
  .map(cookie => cookie.split('='))
  .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
   var EN = false;

  if(cookie.language=='EN'){
    Translate();
  }

   
   $(".Back").hide();
   $(".Pause").hide();
    $(".Explanation").hide();
    $(".PauseForm").hide();
        $(".continue").hide();
    $( ".Start" ).click(Main); 
    $( ".language" ).click(Translate); 

    function Translate(){
      
      EN = !EN;
      
  $(function() {
    
      var lang = $(".language" ).attr('id');
      if(EN){

        document.cookie = "language=EN";
        
      $(".Start" ).text("START");
      $(".language" ).text("AZ");
      $(".language" ).attr("id", "AZ");
      
    }else{
      document.cookie = "language=AZ";
      $(".Start" ).text("BAŞLA");
      $(".language" ).text("EN");
      $(".language" ).attr("id", "EN");
    }

      $('path').each(function(index, item) {
        
       $(this).attr("name",(arrLang[lang][$(this).attr('name')]));
      });
   
  });


    }
    
 
   

    

    
    function Main(){
         if(EN){
          $("#TextPause").text("Game paused");
          $("#TextContinue").text("RESUME GAME");
          $("#TextEnd").text("END GAME");
          $("#restart").text("RESTART");

       BlockLang = {
    'question':'Question',
    'points':'Points',
    'find':'Find',
    'confirm':'CONFIRM',
    'next':'NEXT',
    'pause':'',
    'resume':'RESUME GAME',
    'end':'END GAME',
    'falseSelect':'Wrong!<br>You selected',
    'trueSelect':'Correct!',
    'choose':'',
    'score':'Your score',
    'CorrectAns':'Correct answers ratio',
    'time':'Your time',
    'sec':'sec',



}

    }else{
         BlockLang = {
    'question':'Sual',
    'points':'Xal',
    'find':'Tapın',
    'confirm':'TƏSTIQ',
    'next':'NÖVBƏTI',
    'pause':'Oyunu dayandirmaq',
    'resume':'DAVAM ETMƏK',
    'end':'BITIRMƏK',
    'falseSelect':'Sehv!<br> Sənin seçdiyin',
    'trueSelect':'Düz!',
    'choose':'',
    'score':'Sənin Xalin',
    'CorrectAns':'Doğru cavab nisbəti',
    'time':'Sənin Vaxtin',
    'sec':'san',

}

    }
        $( ".searchMenu" ).click(searchMenu); 

     function searchMenu(){
      $('.wrapper').unbind('click', BodyFun);

          $( "path" ).unbind('click', ClickPart);
      $( ".Pause" ).unbind('click', Pause);
      $('.continue').unbind(ContinueFun);
      $(".wrapper").unbind('click', BodyFreez);
      $(".language").show();
      $( ".searchMenu" ).unbind('click', searchMenu);
      }

      var pause = true;
      $( ".Pause,.pauseMenu" ).click( Pause);

          $(".again").click(function(e) {
            pause = true;
             $(".Pause").html('<i class="fa-solid fa-pause"></i>');
             $(".Pause").show();
        $(".PauseForm").hide();

      
     
            $( "path" ).unbind('click', ClickPart);
        
     $('#seconds,#minutes,#hours').val('00').text('00');
         $( ".Explanation" ).hide(); 
              Question=0
              Right = 0;
              $(".marks").text(BlockLang['points']+": "+Right);
              $(".counter").text(BlockLang['question']+": "+Question+" / 78");
              Parts=['Ağstafa', 'Daşkəsən', 'Gədəbəy', 'Gəncə', 'Xanlar', 'Goranboy', 'Kəlbəcər', 'Mingəçevir', 'Qazax', 'Şəmkir', 'Samux', 'Tovuz', 'YevlakhRayon', 'Bakı', 'Abşeron', 'Ağdam', 'Ağdaş', 'Ağsu', 'Hajigabul', 'Astara', 'Bərdə', 'Beyləqan', 'Biləsuvar', 'Cəbrayıl', 'Cəlilabad', 'Dəvəçi', 'Füzuli', 'Göyçay', 'İmişli', 'İsmayıllı', 'Kürdəmir', 'Laçın', 'Masallı', 'Lerik', 'Neftçala', 'Qobustan', 'Siyəzən', 'Saatlı', 'Sabirabad', 'Salyan', 'Şamaxı', 'Sumqayıt', 'Ucar', 'Xizı', 'Yardımlı', 'Zərdab', 'Ağcabədi', 'Balakən', 'Qəbələ', 'Oğuz', 'Qax', 'Şəki', 'Quba', 'Qusar', 'Xaçmaz', 'Zaqatala', 'Xocavənd', 'Lankaran', 'Qubadli', 'Şuşa', 'Tərtər', 'Xocalı', 'Zəngilan', 'Sədərək', 'Ordubad', 'Şərur', 'Babək', 'Culfa', 'Naxçıvan', 'Şahbuz', 'Xankəndi', 'Naftalan', 'Lankaran', 'Shirvan', 'ŞəkiRayon', 'ŞuşaRayon', 'Yevlakh', 'Kangarli'];
              RandomPart();
              $(".panel").css('opacity', '1');
       $( "path" ).bind('click', ClickPart);
       
              start();
       
 }); 
            function End(){

             stop();
             $(".Pause").hide();
         $( "path" ).unbind('click', ClickPart);       
        $(".Explanation").show(100);
        $(".panel").css('opacity', '0');
         $(".ShowMark").text(BlockLang['score']+": "+Right+" / 78");
         $(".ShowPercent").text(BlockLang['CorrectAns']+": "+(((100*Right)/78).toFixed(1))+" %");
                var ResTime;
               ResTime= min.text()+"."+sec.text();
                
                if(hr.val()){
                    ResTime=hr.val()+":"+ResTime;
                }
                
         $(".ShowTime").text(BlockLang['time']+": "+ResTime+BlockLang['sec']);
                
             
             
          
    }
        
         $(".continue").show();
         $(".Pause").show();
        $( ".Start" ).hide();
         $( ".language" ).hide();
        $( ".search" ).hide();
        $( ".Explanation" ).hide();
    
        
    var IsGadget = false;
    var ConfirmSet = false;
  
    var SuccessAudio = document.getElementById("SuccessAudio"); 
    var DangerAudio = document.getElementById("DangerAudio"); 
    
        let hr = $('#hours');
        
    let min = $('#minutes');
        
    let sec = $('#seconds');
    let counter = 0;
    var HasHov=0;
    var Part=0;
    var PartE=0;
    var PartNameE=0;
    var Question=0;
    var Right = 0;
    var PartName=0;
    var Target=0;
    var timerStop = false;
    if(EN){
      var Parts= [
  'Absheron',  'Agdam',        'Agdash',         'Aghjabadi',
  'Agstafa',   'Agsu',         'Astara',         'Babek',
  'Baku ',     'Balakan',      'Barda',          'Beylagan',
  'Bilasuvar', 'Dashkasan',    'Fuzuli',         'Gadabay',
  'Ganja ',    'Gobustan',     'Goranboy',       'Goychay',
  'khanlar',    'Hajigabul',    'Imishli',        'Ismailli',
  'Jabrayil',  'Jalilabad',    'Julfa',          'Kalbajar',
  'Kangarli',  'Khachmaz',     'Khizi',          'Khojaly',
  'Khojavend', 'Kurdamir',     'Lachin',         'Lankaran',
  'Lankaran ', 'Lerik',        'Masally',        'Mingachevir ',
  'Naftalan ', 'Nakhchivan ',  'Neftchala',      'Oghuz',
  'Ordubad',   'Qakh',         'Qazakh',         'Qbala',
  'Quba',      'Qubadlı',      'Qusar',          'Saatly',
  'Sabirabad', 'Sadarak',      'Salyan',         'Samukh',
  'Shabran',   'Shahbuz',      'Shaki',          'Shaki(city)',
  'Shamakhi',  'Shamkir',      'Sharur',         'Shirvan ',
  'Shusha',    'Shusha(city)', 'Siazan',         'Khankendy',
  'Sumqayıt ', 'Tartar',       'Tovuz',          'Ujar',
  'Yardymli',  'Yevlakh',      'Yevlakh(city) ', 'Zangilan',
  'Zaqatala',  'Zardab'
];


    }else{
    var Parts=['Ağstafa', 'Daşkəsən', 'Gədəbəy', 'Gəncə', 'Xanlar', 'Goranboy', 'Kəlbəcər', 'Mingəçevir', 'Qazax', 'Şəmkir', 'Samux', 'Tovuz', 'YevlakhRayon', 'Bakı', 'Abşeron', 'Ağdam', 'Ağdaş', 'Ağsu', 'Hajigabul', 'Astara', 'Bərdə', 'Beyləqan', 'Biləsuvar', 'Cəbrayıl', 'Cəlilabad', 'Dəvəçi', 'Füzuli', 'Göyçay', 'İmişli', 'İsmayıllı', 'Kürdəmir', 'Laçın', 'Masallı', 'Lerik', 'Neftçala', 'Qobustan', 'Siyəzən', 'Saatlı', 'Sabirabad', 'Salyan', 'Şamaxı', 'Sumqayıt', 'Ucar', 'Xizı', 'Yardımlı', 'Zərdab', 'Ağcabədi', 'Balakən', 'Qəbələ', 'Oğuz', 'Qax', 'Şəki', 'Quba', 'Qusar', 'Xaçmaz', 'Zaqatala', 'Xocavənd', 'Lankaran', 'Qubadli', 'Şuşa', 'Tərtər', 'Xocalı', 'Zəngilan', 'Sədərək', 'Ordubad', 'Şərur', 'Babək', 'Culfa', 'Naxçıvan', 'Şahbuz', 'Xankəndi', 'Naftalan', 'Lankaran', 'Shirvan', 'ŞəkiRayon', 'ŞuşaRayon', 'Yevlakh', 'Kangarli'];
}
          
         RandomPart();
         
        start();
        //window.scrollTo(0, document.body.scrollHeight);
    function Pause() {
      if(pause){
        $(window).scrollTop(0);
        stop();
        if($(".continue").text()==BlockLang['confirm']){
        $('.continue').removeClass("activ");
      }

        $(".Pause").html('<i class="fa-solid fa-play"></i>');
        $(".PauseForm").show(100);



      }
      else{
        if(!timerStop){
          
         
        start();
      }
        $(".Pause").html('<i class="fa-solid fa-pause"></i>');
        $(".PauseForm").hide(100);

      }
      pause = !pause;
        console.log(pause);
    }
    
    function stop() {
        clearInterval(counter);
        $('#start-timer').on('click', start);
    }
    function start() {
        
        counter = setInterval(step, 10);
        
        $('#start-timer').off('click');
    }
 
    function step() {
        sec.val(+sec.val() + 1);
        if (sec.val() > 99) {
            sec.val('00');
            min.val(+min.val() + 1);
            min.text(formatTime(min.val()));
        }
        if (min.val() > 59) {
            min.val('00');
            hr.val(+hr.val() + 1);
            min.text(formatTime(min.val()));
            hr.text(formatTime(hr.val()));
        }
        sec.text(formatTime(sec.val()));
    }
 
    function formatTime(value) {
        let partial = `${('0' + value % 60).slice(-2)}`;
        return partial;
    }
 
    
    $(".marks").text(BlockLang['points']+": "+Right);
    var timesClicked = 0;
  function ClickExe(){
      
       HasHov=Target.hasClass( "hovS" ) || Target.hasClass( "hov" );
//         var Confirm =($(".continue").hasClass("activ")&&($(".continue").text()=="TƏSTIQ"));
         if((!IsGadget && HasHov)){
        
         PartName = Target.attr('name');
        
          
        PartNameE=PartName.replace('Rayon', ' Rayon');
        
        if(PartNameE==PartE){
            Right++;
            $(".marks").text(BlockLang['points']+": "+Right);
            SuccessAudio.play();
           Target.addClass("right");
            $(".message").text(BlockLang['trueSelect']);  
             $(".message").css("color", "#28a745");
            
            $( ".link" ).text(Right);
            $( "path" ).unbind('click', ClickPart);
            freez(Part);
}else{
    DangerAudio.play();
    $('path[name='+Part+']').addClass("right");
    $(".message").html(BlockLang['falseSelect']+": "+PartNameE);
    $(".message").css("color", "#f50023");
    $( "path" ).unbind('click', ClickPart);
    freez(Part);
 
    
}
         }else{
             $(".continue").addClass("activ");
                $("path").removeClass("hovS");
                console.log(123);
             Target.addClass("hovS");
             
             IsGadget=false;
         }
       
  }
     function ClickPart(e) {
         Target = $(e.target);
        ClickExe();
}
    
   
    
    function freez(Part){
        
        
        function BodyFreez(event) {
        
  if (!($(event.target).closest('.fa-solid,.Pause').length)) {
    timerStop = true;
    
      $(".continue").text(BlockLang['next']);
      $('.continue').addClass("activ");
      stop();
      timesClicked++;
       $( "path" ).removeClass("hov");
        $( "path" ).removeClass("hovS");
      if ( timesClicked ==2 && pause) {
        timerStop = false;

          start();
         
          $('.continue').removeClass("activ");
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
IsGadget=true;
         $(".continue").text(BlockLang['confirm']);
         
         
}else{
         $( "path" ).addClass("hov");
}
         $('path[name='+Part+']').removeClass("right");
          
          timesClicked = 0;
          $(".wrapper").unbind('click', BodyFreez);
          
    $( "path" ).bind('click', ClickPart);
          $(".message").text("");
          if(Question==78){
              End();
          }else{
          RandomPart();
          }
    
                  
  }else{
      
  }
     
  }
}
      $(".wrapper").bind('click', BodyFreez);
    }
       function RandomPart(){
          
           
           Question++;
              
           $(".counter").text(BlockLang['question']+": "+Question+" / 78");
           
        Part = Parts[Math.floor(Math.random() * Parts.length)];
        
        const index = Parts.indexOf(Part);
if (index > -1) {
  Parts.splice(index, 1); // 2nd parameter means remove one item only
}
           PartE=Part.replace('Rayon', ' Rayon');
        $(".AskPart").text(BlockLang['find']+": "+PartE);
          
        
    }
 

    
 $( "path" ).addClass("hov");
 
    
    $( "path" ).bind('click', ClickPart);

    
    
    
       if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           ConfirmSet=true;
IsGadget=true;
         $(".continue").text(BlockLang['confirm']);
         $( "path" ).removeClass("hov");
         
         console.log(123);
}
    
      $('.wrapper').click(BodyFun);
      function BodyFun(evt){ 
        if ((!$(event.target).closest('path,.fa-solid,.Pause').length)&&ConfirmSet) {
          console.log(123);
            $("path").removeClass("hov");
            
            
            $('.continue').removeClass("activ");
             
        }
        
    }
    $('.continue').click(ContinueFun);
    function ContinueFun(evt){ 
        if(ConfirmSet&&($(".continue").text()==BlockLang['confirm'])){
            ClickExe();
            
            
        }else{
           
           }
        
    }
    
        }
   
});




