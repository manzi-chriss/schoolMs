function studentUpdatePop(event, student) {
    event.preventDefault();

    const popup = document.getElementById("studentUpdatingPopUp"); // Add quotation marks
    popup.style.top = "10%";
    document.getElementById("stdName").innerText = student.fullName; // Add quotation marks
    document.getElementById("stdClass").innerText = student.class; // Add quotation marks
    document.getElementById("registrationNumber").innerText = student.regNumber; // Add quotation marks


    document.getElementById("studentUpdatingForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
    
        // Create an object to hold the form data
        const formData = {
            deductionMarks: document.getElementById("deductionMarks").value,
            deductionComment:document.getElementById("deductionComment").value
        };
        if (confirm(`Are you sure you want to Deduce ${formData.deductionMarks} marks to ${student.marks}?`)) {
        // Send a PUT request to the API endpoint
        fetch(`http://localhost:3000/student/${student._id}`, { // Replace with your API endpoint
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Convert the data to JSON
        })
            .then((response) => {
                    // Handle success
                    document.getElementById("staffForm").reset();
                    return response.json(); 
                
            })
            .then((data)=>{
                console.log(data)
                document.getElementById("updateMsg").innerHTML =data.msg;
                setTimeout(()=>{popup.style.top = "-100%";},1500)
            })
            .catch((error) => {
                console.error("Error:", error);
                document.getElementById("error").innerHTML =error.message;
            });
    }
    });
}


