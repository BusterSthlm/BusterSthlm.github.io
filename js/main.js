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

// Active nav on scroll (from index_inspo)
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if(window.scrollY >= s.offsetTop - 120) cur = s.id; });
  links.forEach(a => { if(a.getAttribute('href') === '#'+cur) { a.style.color = 'var(--accent)'; } else { a.style.color = ''; } });
});

// Scroll reveal for works and certs
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.12});
document.querySelectorAll('.work-item,.cert-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

function handleSubmit(btn) {
  btn.textContent = '✓ Sent — I\'ll be in touch!';
  btn.style.background = 'var(--accent2)';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
  }, 3000);
}

