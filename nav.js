function renderSidebar(activePage) {
  const nav = [
    { section: '서비스' },
    { id: 'dashboard', icon: '📊', label: '대시보드', href: 'index.html' },
    { section: '콘텐츠' },
    { id: 'rekit', icon: '📖', label: '리킷 관리', href: 'rekit.html' },
    { id: 'classes', icon: '📚', label: '클래스 관리', href: 'classes.html' },
    { section: '회원' },
    { id: 'members', icon: '👥', label: '회원 조회', href: 'members.html' },
    { id: 'member-detail', icon: '👤', label: '회원 상세', href: 'member-detail.html' },
    { section: '마케팅' },
    { id: 'push-triggers', icon: '⚡', label: '자동 트리거', href: 'push-triggers.html' },
    { id: 'push-trigger-edit', icon: '🔧', label: '트리거 편집', href: 'push-trigger-edit.html' },
    { id: 'push-campaign', icon: '📢', label: '캠페인 발송', href: 'push-campaign.html' },
    { id: 'coupons', icon: '🎟️', label: '쿠폰 관리', href: 'coupons.html' },
    { section: 'AI' },
    { id: 'nakta-ai', icon: '🤖', label: '낙타AI 관리', href: 'nakta-ai.html' },
    { section: '시스템' },
    { id: 'settings', icon: '⚙️', label: '설정', href: 'settings.html' },
  ];
  let html = '<div class="sidebar"><div class="sidebar-logo">RE:FEEEL <span>ADMIN</span></div><nav class="sidebar-nav">';
  nav.forEach(item => {
    if (item.section) { html += '<div class="nav-section">' + item.section + '</div>'; }
    else { html += '<a href="' + item.href + '" class="nav-item' + (item.id === activePage ? ' active' : '') + '"><span class="icon">' + item.icon + '</span>' + item.label + '</a>'; }
  });
  html += '</nav></div>';
  document.getElementById('sidebar').innerHTML = html;
}
function renderHeader(title) {
  var today = new Date();
  var dateStr = today.toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'long' });
  document.getElementById('header').innerHTML = '<div class="header"><div class="header-title">' + title + '</div><div class="header-right"><div class="header-date">' + dateStr + '</div></div></div>';
}
document.addEventListener('click', function(e) { if (e.target.classList.contains('toggle')) e.target.classList.toggle('on'); });
