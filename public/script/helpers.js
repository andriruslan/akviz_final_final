// Утиліти для зчитування значень
function get(id) {
  return document.getElementById(id)?.value || "";
}

function isChecked(id) {
  return document.getElementById(id)?.checked;
}

function checkedVal(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || "-";
}

// Автоматично додає/віднімає значення до числових полів
function adjustValue(id, amount) {
  const input = document.getElementById(id);
  if (!input) return;
  let val = parseInt(input.value || "0");
  val += amount;
  if (val < 0) val = 0;
  input.value = val;
  updateMiniReport();
}

// Установлює значення поточного часу
function setNowTime() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("time").value = `${h}:${m}`;
  updateMiniReport();
}

// Додати/відняти хвилини
function changeTime(min) {
  const input = document.getElementById("time");
  if (!input || !input.value) return;
  const [h, m] = input.value.split(":").map(Number);
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m + min);
  const hh = date.getHours().toString().padStart(2, "0");
  const mm = date.getMinutes().toString().padStart(2, "0");
  input.value = `${hh}:${mm}`;
  updateMiniReport();
}
