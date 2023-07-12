
document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openButton');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
  
    // Open modal function
    function openModal() {
      overlay.style.display = 'block';
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  
    // Close modal function
    function closeModal() {
      overlay.style.display = 'none';
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  
    // Event listener for open button click
    openButton.addEventListener('click', openModal);
  
    // Event listener for overlay click
    overlay.addEventListener('click', closeModal);
  
    // Event listener for close button click
    closeButton.addEventListener('click', closeModal);
  });
  