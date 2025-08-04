// Зміна кількості цілей (одиниць)
function changeCount(delta) {
  const input = document.getElementById("targetCount");
  let current = parseInt(input.value) || 0;
  current += delta;

  if (current < 1) current = 1;
  input.value = current;

  // Відключити кнопку -1, якщо значення 1
  document.getElementById("minusBtn").disabled = current <= 1;

  updatePreview();
}
