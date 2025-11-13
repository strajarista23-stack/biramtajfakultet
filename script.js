// Хватање елемената форме и поруке
const form = document.getElementById('registration-form');
const message = document.getElementById('success-message');

// Обрада submit догађаја
form.addEventListener('submit', e => {
  e.preventDefault(); // спречава default reload странице

  // Dodajemo trenutni datum i vreme
  const date = new Date();
  const timestamp = date.toISOString(); // ISO формат (YYYY-MM-DDTHH:MM:SS.sssZ)

  // Dodajemo polje za vreme prijave u FormData
  const formData = new FormData(form);
  formData.append('vreme_prijave', timestamp); // Dodajemo vreme prijave

  // Slanje podataka ka Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbxdUiVpuVIYa_b9QzSqfmjX9WKlQXWuwT7IpUeQEsL3NRHMjuzaUhI8L158loBASmqN/exec", {
    method: "POST",
    body: formData
  })
  .then(res => {
    if (res.ok) {
      message.textContent = "Хвала на пријави!";
      form.reset();
    } else {
      message.textContent = "Дошло је до грешке, покушајте поново.";
    }
  })
  .catch(() => {
    message.textContent = "Грешка у повезивању.";
  });
});
