let form = document.getElementById('myForm');
let fileInput = document.getElementById('file');
let fileError = document.getElementById('fileError');
let successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let files = fileInput.files;
    let userComments = document.getElementById('comments').value;
    
   
    if (files.length === 0) {
        fileError.textContent = "Please select a file.";
        return;
    }


    let allowedExtensions = ['jpg', 'pdf', 'doc'];
    let unsupportedFiles = [];
    let oversizedFiles = [];
    for (let i = 0; i < files.length; i++) {
        let fileExtension = files[i].name.split('.').pop().toLowerCase();
        let fileSize = files[i].size; 
        if (!allowedExtensions.includes(fileExtension)) {
            unsupportedFiles.push(files[i].name);
        }
        if (fileSize > 200 * 1024) { 
            oversizedFiles.push(files[i].name);
        }
    }


    if (unsupportedFiles.length > 0) {
        fileError.textContent = "One or more files are not in the required format.";
        return;
    }

   
    if (oversizedFiles.length > 0) {
        fileError.textContent = "One or more files exceed the size limit (500 KB).";
        return;
    }

  
    fileError.textContent = "";


    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('user-Files[]', files[i], 'user-new-name-file');
    }
    formData.append('user-Comments', userComments);

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        successMessage.textContent = "Files submitted successfully!";
    })
    .catch(error => {
        console.error('Error:', error);
        successMessage.textContent = "An error occurred while submitting the files.";
    });
});
