// Автоматичне встановлення поточного часу
function setNowTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("time").value = `${hh}:${mm}`;
  updatePreview();
}

// Зміна часу на ±хвилин
function changeTime(deltaMinutes) {
  const input = document.getElementById("time");
  if (!input.value) return;

  const [h, m] = input.value.split(":").map(Number);
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m + deltaMinutes);

  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  input.value = `${hh}:${mm}`;
  updatePreview();
}
