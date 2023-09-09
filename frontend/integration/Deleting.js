function sendDeleteRequest(apiUrl) {
    // Confirm with the user before sending the DELETE request
    if (confirm("Are you sure you want to delete this resource?")) {
        // Create a DELETE request using the Fetch API
        fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({msg:"resource to delete"})
        })
        .then(response => {
                alert('Resource deleted successfully.');
        })
        .catch(error => {
            alert('error msg in delete :'+error.message);
        }); 
    }
}