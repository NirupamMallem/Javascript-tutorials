document.getElementById('displayButton').addEventListener('click', async function() {
    try {
      const response = await fetch('https://api.github.com/users/NirupamMallem');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      displayUserData(userData);
    } catch (error) {
      console.error(error.message);
    }
  });
  
  function displayUserData(userData) {
    const table = document.getElementById('userDataTable');
    table.innerHTML = '';
  
    Object.entries(userData).forEach(([key, value]) => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = key;
      cell2.textContent = value;
    });
  
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.classList.remove('hidden');
  }
  