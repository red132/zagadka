$(function(){
$('button').click(function(){
  var s = $(this).next('section')
  if(s.hasClass('hidden')){
    s.slideDown().removeClass('hidden')
  } else { s.slideUp().addClass('hidden')}
})

$('span.red').click(function(){
  var s = $(this).next('nav')
  if(s.hasClass('hidden3')){
    s.slideDown().removeClass('hidden3')
  } else { s.slideUp().addClass('hidden3')}
})
})

