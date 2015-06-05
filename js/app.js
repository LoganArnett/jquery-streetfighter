$(document).on('ready', function(){
  intro();
// Allow the animation to start when the mouse enters the area
  $('.main').on('mouseenter', function(){
    $('div.ryu img').attr('src', 'images/ryu-ready-position.gif');
  });
// Allow the animation to stop when the mouse exits the area
  $('.main').on('mouseleave', function(){
    $('div.ryu img').attr('src', 'images/ryu-standing-still.png');
  });
// Throwing position on mousedown
$('div.ryu img').on('mousedown', function(){
  $('.sound-effect')[0].play();
  $('div.ryu img').attr('src', 'images/ryu-throwing-hadouken.png');
  $('div.hadouken').show().addClass('throw');
});
// Revert on mouseup
$('div.ryu img').on('mouseup', function(){
  $('.sound-effect')[0].load();
  $('div.ryu img').attr('src', 'images/ryu-ready-position.gif');
  $('div.hadouken').hide().removeClass('throw');
});
// Cool pose gif on 'x'
$('body').on('keydown', function(e){
  if(e.which == 88){
    e.preventDefault();
    $('.theme-song')[0].pause();
    $('.cool')[0].play();
    $('div.ryu img').attr('src', 'images/ryu-cool.gif');
  }
  else {
    return false;
  }

});
$('body').on('keyup', function(){
    $('div.ryu img').attr('src', 'images/ryu-ready-position.gif');
    $('.cool')[0].pause();
    $('.theme-song')[0].play();
});

});

// $(document).ready(function() {
// 	doIntro();
// 	playGame();
// });
//
// var hadoukenSound = false;
// function playHadouken () {
//   hadoukenSound = !hadoukenSound;
//   if (hadoukenSound) {
//     $('#hadouken-sound')[0].volume = 0.5;
//     $('#hadouken-sound')[0].load();
//     $('#hadouken-sound')[0].play();
//   }
// }
//
// var coolSound = false;
// function playCool () {
//   coolSound = !coolSound;
//   if (coolSound) {
//     $('#theme-song')[0].pause();
//     // $('#cool')[0].load()
//     $('#cool')[0].play();
//   }
// }
//
//
// function playGame() {
//   $('.ryu').mouseenter(function() {
//     $('.ryu-action').hide();
//     $('.ryu-ready').show();
//   })
//   .mouseleave(function() {
//     $('.ryu-action').hide();
//     $('.ryu-still').show();
//   })
//   .mousedown(function() {
//     playHadouken();
//     $('.ryu-action').hide();
//     $('.ryu-throwing').show();
//     $('.hadouken').finish().show()
//       .animate(
//         {'left': '300px'},
//         500,
//         function() {
//           $(this).stop();
//           $(this).hide();
//           $(this).css('left', '-212px');
//         }
//       );
//   })
//   .mouseup(function() {
//     $('.ryu-action').hide();
//     $('.ryu-still').show();
//   });
//
//   $(document).keydown(function(e) {
//     if (e.keyCode == 88) {
//       playCool();
//       $('.ryu-action').hide();
//       $('.ryu-cool').show();
//     }
//   }).keyup(function(e) {
//     if (e.keyCode == 88) {
//       $('#cool')[0].pause();
//       $('#cool')[0].load();
//       $('.ryu-cool').hide();
//       $('.ryu-still').show();
//     }
//   });
// }

function intro() {
  $('.theme-song')[0].volume = 0.5;
  $('.theme-song')[0].play();
  $('.fighter-logo').fadeIn(4000, function() {
    $(this).fadeOut(1000, function() {
      $('.created-with').fadeIn(1000, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(2000, function() {
            $(this).fadeOut(1500, function() {
              $('.controls').fadeIn(2000);
            });
          })
        })
      })
    })
  })
}
