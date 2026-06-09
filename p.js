// Кнопка "Принять участие" — плавный скролл к форме
document.getElementById('ctaBtn').addEventListener('click', function() {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
});

// Интер/маркетинг: счетчик дней до конкурса
function getCountdown() {
    const eventDate = new Date('2026-11-21T13:00:00');
    const today = new Date();
    const diff = eventDate - today;
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = days > 0 ? days : 0;
}
getCountdown();

// Форма обратной связи — пример интерактивного ответа (без реально отправки)
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent =
        "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.";
    this.reset();
    // Здесь можно добавить отправку данных через AJAX, если нужно
});