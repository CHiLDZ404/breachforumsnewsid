
// Toggle dark/light mode
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  darkToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌓';
});

// smooth reveal for cards
document.addEventListener('DOMContentLoaded', ()=>{
  const cards = document.querySelectorAll('.card');
  cards.forEach((c,i)=>{
    c.style.opacity = 0;
    c.style.transform = 'translateY(8px)';
    setTimeout(()=>{
      c.style.transition = 'opacity .4s ease, transform .4s ease';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 80*i);
  });
});
