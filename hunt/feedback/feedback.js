
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const feedbackStatus = document.getElementById('feedbackStatus');
    feedbackStatus.textContent = 'Thank you for your feedback!';
    feedbackStatus.classList.remove('hidden');
    
    this.reset();
  });