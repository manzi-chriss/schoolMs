function allowStaffToUseSystem(apiUrl) {
    // Ask the user for confirmation before sending the PUT request
    const confirmationMessage = "Are you sure you want to update this resource?";
    
    if (confirm(confirmationMessage)) {
        // Create a PUT request using the Fetch API
        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "allowStaffToUseSystem": true
            })
        })
        .then(response => {
                alert(`Resource updated successfully:`);
                return response.json();
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}
