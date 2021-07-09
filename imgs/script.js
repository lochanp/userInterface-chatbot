const openBot= () => {
    let iframe = $("#forChatbot");
    iframe.attr("src", iframe.data("src")); 
}

// $(document).ready(function() {
//     $('#bot-ico').click(function(event) {
//         $('#forChatbot').toggleClass('active')
//     })
// })

$("#ico").click(() => $(".heading").toggle());

