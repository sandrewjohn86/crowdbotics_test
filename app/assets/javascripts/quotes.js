// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// $.getJSON("https://talaikis.com/api/quotes/", callbackFuncWithData);

//   function callbackFuncWithData(json) {
//       var html = "";
//       var title = "";
//       var content = "";
//       var num = Math.floor((Math.random() * json.length));


//       title = json[num]["author"];
//       content = json[num]["quote"];

//       html += "<div class='quote'>"+ content +"</div>";
//       html += "<div class='author'>"+ title +"</div>";
    
//       html += "<p><a href='https://twitter.com/intent/tweet?text=" + content + " -- " + title + " https://goo.gl/4Hecgs&hashtags=quotes' target='_blank' title='Tweet'><i class='fa fa-twitter' id='twitter'></i></a></p>";
//       $(".quote-page").html(html);
//   };


// //On click
// $("#new-quote").on("click", function() {
//       $.getJSON("https://talaikis.com/api/quotes/", function(json) {
//         var html = "";
//         var title = "";
//         var content = "";
//         var num = Math.floor((Math.random() * json.length));
        
//         title = json[num]["author"];
//         content = json[num]["quote"];
        
//         html += "<div class='quote'>"+ content +"</div>";
//         html += "<div class='author'>"+ title +"</div>";

//         $(".quote-page").append(html);

//       });
//     });

