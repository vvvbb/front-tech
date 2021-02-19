// $('.your-class').slick();

$("#slickerCarousel").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  vertical :true,
  dots:true,
  prevArrow: '<button><i class="far fa-arrow-alt-circle-left"></i></button>',
  nextArrow: '<button><i class="far fa-arrow-alt-circle-right"></i></button>',

});

console.log("aaa");






/* Slider */
/* Slider */
/* Slider */
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 