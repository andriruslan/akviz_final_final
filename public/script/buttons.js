// Кнопки +1 / -1 для кількості
function changeCount(diff) {
  const input = document.getElementById("targetCount");
  let count = parseInt(input.value || "0") + diff;
  if (count < 1) count = 1;
  input.value = count;

  const minusBtn = document.getElementById("minusBtn");
  minusBtn.disabled = count <= 1;

  updateMiniReport();
}

// Кнопка вибору назви Shahed або Гербера
function setTargetNameAndUpdate(name) {
  document.getElementById("targetName").value = name;
  updateMiniReport();
}
