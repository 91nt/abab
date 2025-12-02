// 深色模式切换 + 记住用户偏好
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'light' || 
   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  html.dataset.theme = 'light';
  toggle.innerHTML = '<i class="ti ti-sun"></i>';
} else {
  toggle.innerHTML = '<i class="ti ti-moon"></i>';
}

toggle.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
    toggle.innerHTML = '<i class="ti ti-sun"></i>';
  } else {
    html.dataset.theme = 'dark';
    localStorage.setItem('theme', 'dark');
    toggle.innerHTML = '<i class="ti ti-moon"></i>';
  }
});

// 搜索框回车跳转 Google 搜索
document.getElementById('search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && this.value.trim()) {
    const q = encodeURIComponent(this.value.trim());
    window.open(`https://www.google.com/search?q=${q}`, '_blank');
    this.value = '';
  }
});