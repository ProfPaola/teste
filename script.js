function submit(){
  var skinColor = $("#skinColor").val();
  $(".face, .ear_l, .ear_r, .ear_inner").css('background',skinColor);
  $(".ear_inner").css('filter','brightness(0.8)');
}

function change(){
  var round = $("#roundness").val();
  $(".face").css('borderRadius',round+"%");
  //alert(round)
}

$("#roundness").change(change);

