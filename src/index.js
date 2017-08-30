$(document).ready(function(){
  $("#btn").click(function() {
    var search = $("#search").val();
    $("#display").empty();
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      data: { action: 'query', list: 'search', srsearch: search, format: 'json' },
      dataType: 'jsonp',
      success: processResult,
      error:function(err){console.log(err);}
    });
  });
  function processResult(apiResult){
    var dis = $("#display");
    dis.append("<ul>");
    for (var i = 0; i < apiResult.query.search.length; i++){
      dis.append(
    "<a href='https://en.wikipedia.org?curid="+apiResult.query.search[i].pageid+"'><li>"+apiResult.query.search[i].title+"<p>"+apiResult.query.search[i].snippet+"</p></li></a>"
      );
    }
    dis.append("</ul>");
  }
  $('#search').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#btn').click();//Trigger search button click event
        }
  });
});

