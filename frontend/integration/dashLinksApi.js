// JavaScript function to show deleteBtn specific division and hide others
const  showDivision=(divisionNumber, apinumber,parameterid)=>{
    // Hide all divisions
    const divisions = document.querySelectorAll('.divisionToShow');
    divisions.forEach(division => {
        division.style.display = 'none';
    });

    // Show the selected division
    const selectedDivision = document.getElementById(`show${divisionNumber}`);
    if (selectedDivision) {
        selectedDivision.style.display = '';
        if (apinumber == 1) {
            fetchDataOnSpecificUrl("http://localhost:3000/student","student");
        } else if (apinumber == 2) {
            fetchDataOnSpecificUrl("http://localhost:3000/student/organized/1","student");
        } else if (apinumber == 3) {
            fetchDataOnSpecificUrl("http://localhost:3000/student/organized/0","student");
        } else if (apinumber == 4) {
            fetchDataOnSpecificUrl("http://localhost:3000/staff","staff");
        }else if(apinumber == 5) {
            fetchDataOnSpecificUrl(`http://localhost:3000/student/level/${parameterid}`,"level");    
        }else{
            
        }
    }
}

// Show Division 1 by default when the page loads
window.addEventListener('load', function () {
    showDivision(1,0);
});


module.exports={showDivision}