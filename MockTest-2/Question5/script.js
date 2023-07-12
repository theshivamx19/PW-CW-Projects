function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const color = document.getElementById('color').value;
  
    // Clear previous error messages
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = '';
    }
  
    // Validate form fields
    let isValid = true;
  
    if (name.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      isValid = false;
    }
  
    if (email.trim() === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
      isValid = false;
    }
  
    if (phone.trim() === '') {
      document.getElementById('phoneError').textContent = 'Phone number is required';
      isValid = false;
    } else if (!validatePhoneNumber(phone)) {
      document.getElementById('phoneError').textContent = 'Invalid phone number format';
      isValid = false;
    }
  
    if (password.trim() === '') {
      document.getElementById('passwordError').textContent = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
      isValid = false;
    }
  
    if (age.trim() === '') {
      document.getElementById('ageError').textContent = 'Age is required';
      isValid = false;
    } else if (isNaN(age) || age <= 0) {
      document.getElementById('ageError').textContent = 'Invalid age';
      isValid = false;
    }
  
    if (gender === '') {
      document.getElementById('genderError').textContent = 'Gender is required';
      isValid = false;
    }
  
    if (date.trim() === '') {
      document.getElementById('dateError').textContent = 'Date is required';
      isValid = false;
    }
  
    if (color.trim() === '') {
      document.getElementById('colorError').textContent = 'Favorite color is required';
      isValid = false;
    }
  
    // Submit the form if all fields are valid
    if (isValid) {
      document.getElementById('myForm').submit();
    }
  }
  
  // Helper function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to validate phone number format
  function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  