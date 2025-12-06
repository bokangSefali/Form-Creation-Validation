// Step 1: Initialize the async function
async function fetchUserData() {

    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4a: Fetch data
        const response = await fetch(apiUrl);

        // Step 4b: Convert to JSON
        const users = await response.json();

        // Step 5: Clear "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> list
        const userList = document.createElement('ul');

        // Step 7: Loop through users and add list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 9: Run the function when DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
