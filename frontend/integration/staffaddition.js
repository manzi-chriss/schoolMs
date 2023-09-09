document.getElementById("staffForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an object to hold the form data
    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        responsibility: document.getElementById("ability").value,
        password: document.getElementById("staffPassword").value
    };

    // Send a POST request to the API endpoint
    fetch("http://localhost:3000/staff", { // Replace with your API endpoint
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert the data to JSON
    })
        .then((response) => {
            if (response.ok) {
                // Handle success
                console.log("Form data sent successfully!");
                document.getElementById("staffForm").reset();
            } else {
                // Handle errors
                console.error("Error sending form data");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("error").innerHTML =error.message;
        });
});