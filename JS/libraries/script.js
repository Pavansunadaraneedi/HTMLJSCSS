// $('btn').click(function() 

//     // $('#box').toggle(2000);
//     // $('#box').html("<b> Hello World </b>");
    
//     new TypeIt("#qualities")
//        .type("This is my first string!")
//        .delete("#qualities", { instant: false })
//        .pause(1000)
//        .type("Trainer")
//        .go();

new TypeIt("#myElement", {
  strings: ["This will be typed!", "And this will be typed too."],
}).go();