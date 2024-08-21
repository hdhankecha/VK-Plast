// Get all modals
var modals = document.querySelectorAll(".modal");

// Get all thumbnail images
var thumbnails = document.querySelectorAll(".thumbnail");

// Loop through all thumbnails and add click event
thumbnails.forEach(function(thumbnail) {
    thumbnail.onclick = function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        var modalImg = modal.querySelector(".modal-content img");
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    };
});

// Get the <span> element that closes the modal
var spans = document.querySelectorAll(".close");

// Loop through all <span> elements and add click event
spans.forEach(function(span) {
    span.onclick = function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
        document.body.style.overflow = ""; // Allow background scrolling
    };
});

// Close the modal when the user clicks anywhere outside the modal
modals.forEach(function(modal) {
    modal.onclick = function() {
        this.style.display = "none";
        document.body.style.overflow = ""; // Allow background scrolling
    };
});

//get form send
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/xjkbagko', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('responseMessage').textContent = 'Thank you! Your message has been sent.';
        } else {
            document.getElementById('responseMessage').textContent = 'Oops! There was a problem submitting your form.';
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'An error occurred: ' + error;
    });
});
    


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(22.250908, 70.202056),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}