var images = [];
let userInput = images;

$(".add").click(function() {
    userInput = $(".picture-url").val();
    images.push(userInput);
    for (let link of images) {
        $(".gallery").append("<img src=" + link + ">");
    }
});

$(".picture-url").click(function() {
    $(".picture-url").val("");
});