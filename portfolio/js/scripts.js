window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function chkAndValidateEmail(e) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const inputEmail = document.getElementById('exampleInputEmail1').value;
    const isValid = emailPattern.test(inputEmail);
    const emailHelp = document.getElementById("emailHelp"); // Get a reference to the element

    if (!isValid) {
        emailHelp.style.display = "block";
        $("#commentDisp").css("display", "none");
    } else {
        emailHelp.style.display = "none";
        $("#commentDisp").css("display", "block");

    }
}

function submitForm() {
    debugger;
    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const comment = document.getElementById('content').value; // Add .value to get the input content

    // Get the table body element where you want to add the row
    let table = document.getElementById("tableBody");

    // Create a new row element
    let row = document.createElement("tr");

    // Create cells for the row
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");

    // Insert data into the cells
    c1.innerText = name;
    c2.innerText = email;
    c3.innerText = comment;

    // Append the cells to the row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    console.log(row);

    // Append the row to the table body
    // Using vanilla JS
    table.appendChild(row);
    
    $("#name").val('');
    $("#exampleInputEmail1").val('');
    $("#content").val('');

    ii.style.display = "block";
    // Alternatively, using jQuery to append the row
    // $("#tableBody").append(row); // If you're using jQuery
}
