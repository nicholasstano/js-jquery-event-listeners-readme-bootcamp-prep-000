//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
    
  });
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  });
}

function pressIt() {
  $('#typing').on('keypress', function(g) {
    if (key.which === 71) {
      alert('g was pressed')
    }
  })
}

$(document).ready(function(){

// call functions here

});
