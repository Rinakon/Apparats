document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Убираем active у всех секций
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.remove('active');
    });
    
    // Добавляем active к нужной секции
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).classList.add('active');
  });
});
