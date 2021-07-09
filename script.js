// const openBot= () => {
//     let iframe = $("#forChatbot");
//     iframe.attr("src", iframe.data("src")); 
// }

$(document).ready(function() {
    $('.icon').click(function(event) {
        $('.chatbox').toggle('active')
    })
})

$(".icon").click(() => $(".heading").toggle());

