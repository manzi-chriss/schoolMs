function fetchDataAndRender() {
    const apiUrl = "http://localhost:3000/home"; // Replace with your API endpoint URL
    fetch(apiUrl)
        .then((response) => {
                return response.json(); // Parse response JSON
        })
        .then((data) => {
            // when u go in the console u will see what are that sent then u can manipulate them
            console.log(data)
            //this is how we can reacch to the student array and the staff array int the json data sent by the server
            const students = data.students;
            const staff = data.staff;
            // As students is an array of student objects with a "marks" property
             const studentsWithMarksGreaterThan20 = students.filter((student) => student.marks >= 20);
             //render the number of students with marks greater 20
             document.getElementById("disciplined").innerText = studentsWithMarksGreaterThan20.length

             const studentsWithMarksLessThan20 = students.filter((student) => student.marks < 20);
            //render the number of students with marks less than 20
            document.getElementById("notdisciplined").innerText = studentsWithMarksLessThan20.length

             const studentsinLevel3 = students.filter((student) => student.class === 3);
             //render the number of students in level 3 in a button with id called "level3"
              document.getElementById("level3").innerText = studentsinLevel3.length

             const studentsinLevel4 = students.filter((student) => student.class === 4);
             //render the number of students in level 4 in a button with id called "level3"
             document.getElementById("level4").innerText = studentsinLevel4.length

             const studentsinLevel5 = students.filter((student) => student.class === 5);
             //render the number of students in level 3 in a button with id called "level3"
             document.getElementById("level5").innerText = studentsinLevel5.length

        })
        .catch((error) => {
            document.getElementById("error").innerHTML =`${error.message},Your may Try to reload the page`;
        });
}
fetchDataAndRender();