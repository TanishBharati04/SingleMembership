$(document).ready(function() {
    var $testimonial = $('.testimonial');
    var $leftArrow = $('.left-arrow');
    var $rightArrow = $('.right-arrow');
    var testimonialWidth = $testimonial.outerWidth(true); 
    var currentPosition = 0; 

    $rightArrow.click(function() {
        currentPosition -= testimonialWidth;
        if (currentPosition < -testimonialWidth * ($testimonial.length - 1)) {
            currentPosition = 0; 
        }
        $testimonial.animate({ left: currentPosition + 'px' }, 500); 
    });

    $leftArrow.click(function() {
        currentPosition += testimonialWidth;
        if (currentPosition > 0) {
            currentPosition = -testimonialWidth * ($testimonial.length - 1); 
        }
        $testimonial.animate({ left: currentPosition + 'px' }, 500);
    });
});