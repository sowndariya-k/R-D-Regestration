var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";

        // Get all elements with the class name "prevBtn" and hide them
        let prevButtons = document.getElementsByClassName("prevBtn");
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].style.display = "none";
        }
    } else {
        document.getElementById("prevBtn").style.display = "inline";

        // Get all elements with the class name "prevBtn" and show them
        let prevButtons = document.getElementsByClassName("prevBtn");
        for (let i = 0; i < prevButtons.length; i++) {
            prevButtons[i].style.display = "inline";
        }
    }

    if (n == (x.length - 1)) {
        $('#nextBtn').attr('class', 'recaptcha-btn');
        document.getElementById("nextBtn").value = "Submit";
        $('#prevBtn').hide();
        $('.prevBtn').hide();
        $('.recaptcha').addClass('lastTabRecaptcha')
        $('#contact-form').captcha();
    } else {
        document.getElementById("nextBtn").value = "Next";
    }

    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

var input = document.getElementById("regForm");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("nextBtn").click();
    }
});

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";

    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;

    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        $('#contact-form').hide();
        // ... the form gets submitted:
        // document.getElementById("regForm").submit();
        // HomeBannerFormSubmit();
        // return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);

    // Focus on the first input of the next tab
    var inputs = x[currentTab].getElementsByTagName("input");
    if (inputs.length > 0) {
        inputs[0].focus();
    }
}

function HomeBannerFormSubmit() {
    // $('#contact-form').submit();
    $('#contact-form').hide();
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    // Remove any existing error messages
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(msg) {
        msg.parentNode.removeChild(msg);
    });

    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // Add an "invalid" class to the field:
            y[i].className += " invalid";
            // Add error message
            var errorMessage = document.createElement("span");
            errorMessage.className = "error-message";
            errorMessage.innerHTML = "This field is required";
            y[i].parentNode.insertBefore(errorMessage, y[i]);
            // Set the current valid status to false
            valid = false;
        } else {
            // Check pattern validation
            if (y[i].pattern && !new RegExp(y[i].pattern).test(y[i].value)) {
                // Add an "invalid" class to the field:
                y[i].className += " invalid";
                // Add error message
                var errorMessage = document.createElement("span");
                errorMessage.className = "error-message";
                errorMessage.innerHTML = y[i].title;
                y[i].parentNode.insertBefore(errorMessage, y[i]);
                // Set the current valid status to false
                valid = false;
            }
        }
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}