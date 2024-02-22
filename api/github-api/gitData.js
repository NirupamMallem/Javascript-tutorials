document.getElementById('displayButton1').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/D-palleti19');
  });
  
  document.getElementById('displayButton2').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/Karthikeya-Konathala');
  });
  
  document.getElementById('displayButton3').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/Lohitharepalle');
  });
  
  document.getElementById('displayButton4').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/NainithaChittaluri');
  });
  
  document.getElementById('displayButton5').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/nivaskalva');
  });
  
  document.getElementById('displayButton6').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/Prem-kumar-5566');
  });
  
  document.getElementById('displayButton7').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/sameer6119');
  });
  
  document.getElementById('displayButton8').addEventListener('click', function() {
    displayUserDataFromURI('https://api.github.com/users/NirupamMallem');
  });
  
  async function displayUserDataFromURI(uri) {
    try {
      const response = await fetch(uri);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json(); 
      displayUserData(userData);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  function displayUserData(userData) {
    const table = document.getElementById('userDataTable');
    table.innerHTML = '';
  
    for (const [key, value] of Object.entries(userData)) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = key;
      cell2.textContent = value;
    }
  
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.style.display = 'block';
  }
  


