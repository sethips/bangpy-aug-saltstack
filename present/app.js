$("document").ready(function(){
  format.extend(String.prototype)
  var slideNo = window.location.hash.substring(1)
  $(".slide").hide()
  console.log("showing element with id - {0}".format(slideNo))
  $("#{0}".format(slideNo)).show()
  
  $(document).keydown(function(e){
    switch(e.which){
    case 38: //up keypress
      var slideNo = parseInt(location.hash.substring(1))
      if(slideNo == 1){
        window.location.hash = "#" + $(".slide").length
      }else{
	window.location.hash = "#" + (slideNo - 1)
      }
      location.reload()
      console.log("down arrow pressed. .the slides count is {0}".format($(".slide").length))
      e.preventDefault()
      break
    case 40: //down keypress
      var slideNo = parseInt(location.hash.substring(1))
      if(slideNo < $(".slide").length){
        window.location.hash = "#" + (slideNo + 1 ) 
      }else{
	window.location.hash = "#1"
      }
      location.reload()
      console.log("down arrow pressed. .the slides count is {0}".format($(".slide").length))
      e.preventDefault()
   }
   
  }  )	
})
