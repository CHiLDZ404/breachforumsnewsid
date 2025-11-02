
// Toggle light/dark
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      document.body.classList.toggle('light');
      btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌓';
    });
  }
  // reveal cards
  document.querySelectorAll('.card').forEach((c,i)=>{
    setTimeout(()=>{ c.style.opacity=1; c.style.transform='translateY(0)'; }, 60*i);
  });
});
