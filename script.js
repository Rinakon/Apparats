document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // Функция показа нужной вкладки
  function showTab(tabId) {
    tabContents.forEach(section => {
      section.classList.remove('active');
    });
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }

  // Обработка кликов
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('href').substring(1);
      showTab(tabId);

      // Обновляем URL без перезагрузки
      history.pushState(null, '', `#${tabId}`);
    });
  });

  // Поддержка "назад/вперёд" в браузере
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'catalog';
    showTab(hash);
  });

  // Инициализация при загрузке
  const initialHash = window.location.hash.substring(1) || 'catalog';
  showTab(initialHash);
});
