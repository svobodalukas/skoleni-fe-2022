// Custom scripts

$('body').scrollspy({ target: ".navbar", offset: 50 });

// Add smooth scrolling on all links inside the navbar
$(".smooth-link").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if
});

// Modal data
$('#tourModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var estateTitle = button.data('title');
  var estateId = button.data('id');
  $("#modalResult").hide();
  $("#modalForm").show();

  var modal = $(this);
  modal.find('.modal-subtitle').html('Selected <strong>' + estateTitle + '</strong>');
  modal.find('#tourId').val(estateId);
})

// Example starter JavaScript for disabling form submissions if there are invalid fields
var form = document.getElementById('modalForm');
form.addEventListener('submit', function(event) {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    $("#modalForm").hide();
    $.get("https://www.lukassvoboda.cz/coding/bootstrap2020/ajax.php", $('#modalForm').serialize() , function( data ) {
      $("#modalResult").show();
      $("#modalResultStatus").text('Booking request successfully sent.').addClass('alert-success');
      $("#modalResultContent").html(data);
    });

    event.preventDefault();
  }
  form.classList.add('was-validated');
}, false);


// jQuery UI
$(function () {
    $(".ui-datepicker").datepicker({minDate: 1});
}); 
