/*   
  Project by Zua 
  https://github.com/thatziv/webhook 
*/
$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
        // Infinite loop to continuously send the message
        (function loopMessage() {
            $.post(link, {"content": content, "username": username, "avatar_url": avatar,})
              .done(function() {
                  console.log('Message sent');
              })
              .fail(function() {
                  console.log('Message failed to send');
              })
              .always(function() {
                  // Delay between messages (e.g., 1 second)
                  setTimeout(loopMessage, 1000);
              });
        })();
    });
});
