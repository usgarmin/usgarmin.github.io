
document.addEventListener('DOMContentLoaded',function(){
 const field=document.querySelector('[data-article-search]');
 if(!field)return;
 const cards=[...document.querySelectorAll('[data-article-card]')];
 field.addEventListener('input',function(){
  const q=field.value.trim().toLowerCase();
  cards.forEach(card=>{card.hidden=!card.textContent.toLowerCase().includes(q)});
 });
});
