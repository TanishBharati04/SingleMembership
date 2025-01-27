$(document).ready(function () {
    let currentIndex = 0; // Track the current quote index
    const quotes = $(".testimonial-quotes"); // Get all quotes
    const totalQuotes = quotes.length; // Total number of quotes

    // Function to reset classes
    function resetClasses() {
        quotes.removeClass("active exit-left exit-right");
    }

    // Function to show a quote based on index
    function showQuote(newIndex, direction) {
        const currentQuote = $(quotes[currentIndex]);
        const nextQuote = $(quotes[newIndex]);

        // Animate current quote out
        if (direction === "right") {
            currentQuote.addClass("exit-left");
        } else {
            currentQuote.addClass("exit-right");
        }

        // After the animation, reset classes and show the next quote
        setTimeout(() => {
            resetClasses();
            nextQuote.addClass("active");
        }, 600); // Match the transition duration in CSS (0.6s)

        currentIndex = newIndex; // Update current index
    }

    // Right arrow click
    $(".right-arrow").click(function () {
        const newIndex = (currentIndex + 1) % totalQuotes; // Next index
        showQuote(newIndex, "right");
    });

    // Left arrow click
    $(".left-arrow").click(function () {
        const newIndex = (currentIndex - 1 + totalQuotes) % totalQuotes; // Previous index
        showQuote(newIndex, "left");
    });
});
