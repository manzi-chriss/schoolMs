// Load jsPDF library
import jsPDF from 'jspdf';

document.getElementById('convertButton').addEventListener('click', () => {
  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Get the table element
  const table = document.getElementById('table');

  // Convert table to a data URL
  const tableDataURL = table.toDataURL();

  // Add the table as an image to the PDF
  pdf.addImage(tableDataURL, 'PNG', 10, 10, 190, 0);

  // Save the PDF
  pdf.save('table.pdf');
});
