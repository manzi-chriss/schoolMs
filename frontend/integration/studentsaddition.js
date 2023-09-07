document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an object to hold the form data
    const formData = {
        stdname: document.getElementById("sname").value,
        regNumber: document.getElementById("reg").value,
        year: document.getElementById("year").value,
        classN: document.getElementById("classN").value,
        dob: document.getElementById("dob").value,
        pname: document.getElementById("pname").value,
        phone: document.getElementById("pPhone").value,
    };

    // Send a POST request to the API endpoint
    fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert the data to JSON
    })
        .then((response) => {
                // Handle success
                console.log("Form data sent successfully!");
                document.getElementById("studentForm").reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("error").innerHTML =error.message;
        });
});