// Minimal interactions: form validation and smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Simple contact form handler (no backend)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Sending...';
      setTimeout(function(){
        btn.disabled = false; btn.textContent = 'Send Message';
        alert('Thanks! This demo form does not submit — integrate your backend or email provider.');
        form.reset();
      },900);
    });
  }
});
