(() => {
  // Старт приёма заявок: 1 февраля 2027, 00:00 по времени ЯНАО (UTC+5).
  const target = new Date('2027-02-01T00:00:00+05:00').getTime();
  const ids = ['days', 'hours', 'minutes', 'seconds'];
  const status = document.getElementById('timer-status');
  function tick() {
    const now = Date.now();
    let diff = target - now;
    if (diff <= 0) {
      ids.forEach(id => document.getElementById(id).textContent = '00');
      status.textContent = 'ПРИЁМ ЗАЯВОК ДОЛЖЕН НАЧАТЬСЯ — СЛЕДИ ЗА ОФИЦИАЛЬНЫМИ НОВОСТЯМИ';
      return;
    }
    const days = Math.floor(diff / 86400000); diff %= 86400000;
    const hours = Math.floor(diff / 3600000); diff %= 3600000;
    const minutes = Math.floor(diff / 60000); diff %= 60000;
    const seconds = Math.floor(diff / 1000);
    [days, hours, minutes, seconds].forEach((value, i) => document.getElementById(ids[i]).textContent = String(value).padStart(i === 0 ? 3 : 2, '0'));
  }
  tick(); setInterval(tick, 1000);
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav nav');
  menu.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    if (!open) Object.assign(nav.style, {position:'absolute',top:'109px',left:'18px',right:'18px',zIndex:'20',padding:'22px',background:'#fbf8f4',border:'1px solid #17152222',flexDirection:'column',gap:'20px'});
    menu.setAttribute('aria-expanded', String(!open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { if (innerWidth <= 800) nav.style.display = 'none'; }));
})();
