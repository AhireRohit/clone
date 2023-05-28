$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
      e.preventDefault();
  
      var user = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val()
      };
  
      var users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
  
      window.location.href = 'index.html';
    });
  });