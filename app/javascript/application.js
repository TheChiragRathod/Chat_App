// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

 var scroll_bottom = function(){
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

var submit_message = function(){
  $('#message_body').on('keydown', function(e){
      if(e.keyCode==13){
        $('#send_button').click();
        e.target.value = "";
      }
    })
}

$(document).ready(function() {
  scroll_bottom();
  submit_message();
})
