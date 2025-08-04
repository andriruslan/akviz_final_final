function checkDetect() {
  const visual = document.getElementById("visual");
  const obs = document.getElementById("obs");

  // Активувати або деактивувати поле "із застосуванням приладів"
  if (visual.checked) {
    obs.disabled = false;
  } else {
    obs.checked = false;
    obs.disabled = true;
  }

  updatePreview(); // оновити міні-звіт після змін
}

function getDetectionText() {
  const detects = [];

  if (document.getElementById("acoustic").checked) detects.push("акустично");
  if (document.getElementById("radar").checked) detects.push("радіолокаційно");

  const visual = document.getElementById("visual").checked;
  const obs = document.getElementById("obs").checked;

  if (visual) {
    detects.push(obs ? "візуально із застосуванням приладів" : "візуально");
  }

  return detects.join(", ");
}
