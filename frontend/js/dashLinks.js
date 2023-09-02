// JavaScript function to show a specific division and hide others
function showDivision(divisionNumber) {
   // Hide all divisions
   const divisions = document.querySelectorAll('.divisionToShow');
   divisions.forEach(division => {
       division.style.display = 'none';
   });

   // Show the selected division
   const selectedDivision = document.getElementById(`show${divisionNumber}`);
   if (selectedDivision) {
       selectedDivision.style.display = '';
   }
}

// Show Division 1 by default when the page loads
window.addEventListener('load', function () {
   showDivision(1);
});