
const cur=document.getElementById('cur');
if(cur){
  document.addEventListener('mousemove',e=>{
    cur.style.left=e.clientX+'px';
    cur.style.top=e.clientY+'px';
  });
  document.querySelectorAll('a,button,.sb,.service-card,.work-card,.pc').forEach(el=>{
    el.addEventListener('mouseenter',()=>cur.classList.add('big'));
    el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
  });
}

const hbg=document.getElementById('hbg');
const drawer=document.getElementById('drawer');
function closeDrawer(){
  if(!hbg || !drawer) return;
  hbg.classList.remove('open');
  drawer.classList.remove('open');
  hbg.setAttribute('aria-expanded','false');
}
if(hbg && drawer){
  hbg.addEventListener('click',()=>{
    const open=drawer.classList.toggle('open');
    hbg.classList.toggle('open');
    hbg.setAttribute('aria-expanded',open);
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('nav')&&!e.target.closest('.nav-drawer')) closeDrawer();
  });
}

const rio=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting) setTimeout(()=>e.target.classList.add('on'),i*55);
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>rio.observe(el));

document.querySelectorAll('.fbtn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.pc').forEach(card=>{
      const tags=card.dataset.tags||'';
      card.style.display=(f==='all'||tags.includes(f))?'':'none';
    });
  });
});
