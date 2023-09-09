function fetchDataAndRender(student_id) {
    // Retrieve the user data from local storage
   const storedUserData = localStorage.getItem('school_system_data_for_student');

   // Parse the stored JSON data back to an object
    const student = JSON.parse(storedUserData);

    if (student) {
    // You can now use 'student' as an object with multiple properties
    const apiUrl = `http://localhost:3000/student/${student._id}`; // Replace with your API endpoint URL
    fetch(apiUrl)
        .then((response) => {
                return response.json(); // Parse response JSON
        })
        .then((data) => {
            // when u go in the console u will see what are that sent then u can manipulate them
            const student=data.student;
            document.getElementById("name").innerText=student.fullName;
            document.getElementById("regNumber").innerText=student.regNumber;
            document.getElementById("dob").innerText=student.dob
            document.getElementById("level").innerText=student.level
            document.getElementById("year").innerText=student.year
            document.getElementById("marks").innerText=student.marks
            document.getElementById("records").innerText=student.grade
        })
        .catch((error) => {
            alert(`${error.message},Your may Try to reload the page`);
        });

     } else {
    
      alert(`No You have to First Signup found in local storage.`);
      window.location.href = "Landing.html";
      
    }
}
fetchDataAndRender();