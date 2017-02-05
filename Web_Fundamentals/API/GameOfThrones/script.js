$(document).ready(function() {
   $('img').click(function(){
      var link=  $.get('http://anapioficeandfire.com/api/houses/'+$(this).attr('house'));
      $.get(link, function(res){
         var api={
                 name: res[0].name,
                 words: res[0].words,
                 titles: res[0].titles
                 }
        var house_name=""
                 house_name+= '<div>'
                 house_name+= '<h3>Name: '+api.name+'</h3>'
                 house_name+= '<h4>Words: '+api.words+'</h4>'
                 house_name+= '<h4>Titles: '+api.titles+'</h4>'
                 house_name+= '</div>'
                    $('#house_info').empty().append(house_name)
      },"json");
   });

                        // for ( var i=0;i<400;i++){
                        //
                        //    $.get('http://anapioficeandfire.com/api/houses/'+i, function(res){
                        //    console.log( res.name)
                        //    }, "json");
                        // }


   // $('img').on('click', function(stark){
   //
   //
   //    $.get('http://anapioficeandfire.com/api/houses/362', function(res){
   //       var api={
   //          name: res.name,
   //          words: res.words,
   //          titles: res.titles
   //          }
   //          var house=""
   //          house+= '<div>'
   //          house+= '<h3>Name: '+api.name+'</h3>'
   //          house+= '<h4>Words: '+api.words+'</h4>'
   //          house+= '<h4>Titles: '+api.titles+'</h4>'
   //          house+= '</div>'
   //             $('#house_info').empty().append(house)
   //          });
   //
   //    })
   //    $('img').on('click',function(){
   //       $.get('http://anapioficeandfire.com/api/houses/378', function(res){
   //          var house={
   //             Name: res.name,
   //             Words: res.words,
   //             Titles: res.titles
   //           }
   //           var house=""
   //           house+= '<div>'
   //           house+= '<h3>'+api.name+'</h3>'
   //           house+= '<h4>'+api.words+'</h4>'
   //           house+= '<h4>'+api.titles+'</h4>'
   //           house+= '</div>'
   //                $('#house_info').empty().append(house)
   //             });
   //       })
   //    $(this).on('click', 'img', function(){
   //       $.get('http://anapioficeandfire.com/api/houses/228', function(res){
   //          var house={
   //             Name: res.name,
   //             Words: res.words,
   //             Titles: res.titles
   //           }
   //           var house=""
   //          house+= '<div>'
   //          house+= '<h3>'+api.name+'</h3>'
   //          house+= '<h4>'+api.words+'</h4>'
   //          house+= '<h4>'+api.titles+'</h4>'
   //          house+= '</div>'
   //                $('#house_info').empty().append(house)
   //             });
   //       })
   // $(this).on('click', 'img', function(){
   //       $.get('http://anapioficeandfire.com/api/houses/15', function(res){
   //          var api={
   //             name: res.name,
   //             words: res.words,
   //             titles: res.titles
   //           }
   //           var house=""
   //           house+= '<div>'
   //           house+= '<h3>'+api.name+'</h3>'
   //           house+= '<h4>'+api.words+'</h4>'
   //           house+= '<h4>'+api.titles+'</h4>'
   //           house+= '</div>'
   //
   //                $('#house_info').empty().append(house)
   //             });
   //       })
   //       console.log('test')
});
