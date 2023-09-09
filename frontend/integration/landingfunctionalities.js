function showSignIns(signInDivisionNumber, apinumber) {
    // Hide all divisions
    const divisions = document.querySelectorAll('.signInToShow');
    divisions.forEach(division => {
        division.style.display = 'none';
    });

    // Show the selected division
    const selectedDivision = document.getElementById(`signIn${signInDivisionNumber}`);
    if (selectedDivision) {
        selectedDivision.style.display = '';
    }
}

// Show Division 1 by default when the page loads
window.addEventListener('load', function () {
    localStorage.removeItem('school_system_data_for_admin');
    localStorage.removeItem('school_system_data_for_staff');
    localStorage.removeItem('school_system_data_for_student');
    const storedUserData1 = localStorage.getItem('school_system_data_for_admin');
    const storedUserData2 = localStorage.getItem('school_system_data_for_staff');
    const storedUserData3 = localStorage.getItem('school_system_data_for_student');
    

    const admin = JSON.parse(storedUserData1);
    const staff = JSON.parse(storedUserData2);  
    const student = JSON.parse(storedUserData3);

    if (admin){
        window.location.href = "ADMINdashboard.html";
    }else if(staff){
        window.location.href = "STAFFdashboard.html";
    }else if(student){
        window.location.href = "PROFILEstudent.html";
    }else{
    showSignIns(0, 0);
    }
});


// Attach an event listener to each form's submit button
document.getElementById("submitSignIn1").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    signIn("http://localhost:3000/signin/admin", "signIn1");
    setTimeout(()=>{
        window.location.href = "ADMINdashboard.html";
    },2000)
});

document.getElementById("submitSignIn2").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    signIn("http://localhost:3000/signin/staff", "signIn2");
    window.location.href = "STAFFdashboard.html";
});

document.getElementById("submitSignIn3").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    signIn("http://localhost:3000/signin/student", "signIn3");
    window.location.href = "PROFILEstudent.html";
});



async function signIn(apiUrl, formId) {
    // Create an object to hold the form data according to the form id
    let formData = {};
    let key;
    
    if (formId == "signIn1") {
        formData = {
            title: document.getElementById("role").value,
            phone: document.getElementById("phoneM").value,
            password: document.getElementById("passwordM").value,
        };
        key="school_system_data_for_admin"
    } else if (formId == "signIn2") {
        formData = {
            phone: document.getElementById("phone").value,
            password: document.getElementById("password").value,
        };
        key="school_system_data_for_staff"
    } else if (formId == "signIn3") {
        formData = {
            number: document.getElementById("registrationNumber").value,
        };
        key="school_system_data_for_student"
    } else {
        // Handle the case where an invalid form id is passed
        alert("Invalid form ID: " + formId);
        return;
    }

    // Send a POST request to the API endpoint
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Convert the data to JSON
        });
        const responseData = await response.json();
        if (response.ok) {
            // Handle success
            document.getElementById(formId).reset();

        
            localStorage.setItem(key, JSON.stringify(responseData.object));

            // Uncomment the next line to display an alert to the user
            alert(JSON.stringify(responseData.msg));

        } else {
            alert(JSON.stringify(responseData.msg));
        }
    } catch (error) {
        alert(JSON.stringify({msg:"CATCH error: "+error.message}));
    }
}
