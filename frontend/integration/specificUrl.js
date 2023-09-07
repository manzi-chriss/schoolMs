const  fetchDataOnSpecificUrl=(apiUrl,specification)=>{
    // simply the apiUrl is like "http://localhost:3000/home"; 
    fetch(apiUrl)
        .then((response) => {
            if (response.ok) {
                return response.json(); // Parse response JSON
            } else {
                throw new Error("Failed to fetch students");
            }
        })
        .then((data) => {
            
        
            // Declare variables for table header rows and table body once
           let tableHeaders, tableBody;
    if (specification == "student") {
        const students=data.students
        tableHeaders = document.getElementById("tableHeader");
        tableBody = document.getElementById('tableBody');
        
        // Remove all existing rows (child nodes) in tableHeaders using while clause 
        while (tableHeaders.firstChild) {
            tableHeaders.removeChild(tableHeaders.firstChild);
        }

        // Remove all existing rows (child nodes) in tableBody
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        document.getElementById('tableTitle').innerText=data.title
        let trHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th1.textContent = "Name";
        th2.textContent = "Marks";
        th3.textContent = "Level";
        trHeader.appendChild(th1);
        trHeader.appendChild(th2);
        trHeader.appendChild(th3);
        tableHeaders.appendChild(trHeader);

        // Populate table body with students
        for (let i = 0; i < students.length; i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = students[i].fullName;
            td2.textContent = students[i].marks;
            td3.textContent = students[i].class;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tableBody.appendChild(tr);
        }
        document.getElementById('tableTotal').innerText=data.numberAll
        } 
        else if (specification == "staff")
        {
           const staff=data.staff
           tableHeaders = document.getElementById("tableHeader");
           tableBody = document.getElementById('tableBody');
        
        // Remove all existing rows (child nodes) in tableHeaders using while clause 
        while (tableHeaders.firstChild) {
            tableHeaders.removeChild(tableHeaders.firstChild);
        }

        // Remove all existing rows (child nodes) in tableBody
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        document.getElementById('tableTitle').innerText=data.title
        let trHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        th1.textContent = "Name";
        th2.textContent = "Title";
        th3.textContent = "Action";
        trHeader.appendChild(th1);
        trHeader.appendChild(th2);
        trHeader.appendChild(th3);
        tableHeaders.appendChild(trHeader);

        // Populate table body with students
        for (let i = 0; i < staff.length; i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.textContent = staff[i].fullName;
            td2.textContent = staff[i].title;
            td3.textContent = "Delete";

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            tableBody.appendChild(tr);
        }
        document.getElementById('tableTotal').innerText=data.numberAll
    }else if(specification=="level"){
        const students=data.students
        tableHeaders = document.getElementById("tableHeader");
        tableBody = document.getElementById('tableBody');
        
        // Remove all existing rows (child nodes) in tableHeaders using while clause 
        while (tableHeaders.firstChild) {
            tableHeaders.removeChild(tableHeaders.firstChild);
        }

        // Remove all existing rows (child nodes) in tableBody
        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }
        document.getElementById('tableTitle').innerText=data.title
        let trHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
        th1.textContent = "Name";
        th2.textContent = "Marks";
        th3.textContent = "Class"
        th4.textContent = "ACTION";
        trHeader.appendChild(th1);
        trHeader.appendChild(th2);
        trHeader.appendChild(th3);
        trHeader.appendChild(th4);
        tableHeaders.appendChild(trHeader);

        // Populate table body with students
        for (let i = 0; i < students.length; i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let btn = document.createElement('button');
            let deleteBtn = document.createElement('button');
            btn.textContent = "Update";
            deleteBtn.innerText = "Delete";
            deleteBtn.setAttribute("onClick", `sendDeleteRequest("http://localhost:3000/student/${students[i]._id}")`);
            btn.setAttribute("onClick", `studentUpdatePop(event, ${JSON.stringify(students[i])})`);
            deleteBtn.setAttribute("class", "p-2 bg-red-500");


            td1.textContent = students[i].fullName;
            td2.textContent = students[i].marks;
            td3.textContent = students[i].class;
            td4.appendChild(btn);
            td4.appendChild(deleteBtn);
            td4.setAttribute("class","grid grid-cols-2")
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tableBody.appendChild(tr);
        }
        document.getElementById('tableTotal').innerText=data.numberAll
    } else {
            tableBody.innerText = "No students found";
    }
      })
        .catch((error) => {
            document.getElementById("error").innerHTML =error.message;
        });
}

module.exports={fetchDataOnSpecificUrl}