// js/main.js
const loadComponent = async (id, path) => {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    console.error("Помилка завантаження:", path);
  }
};

window.onload = () => {
  const components = [
    "sector", "position", "location", "target-type", "side", "target-number",
    "name", "count", "azimuth", "course", "distance", "height", "time",
    "detection", "result", "ammo", "description", "preview", "actions", "compass-debug"
  ];

  components.forEach(name => {
    loadComponent(`${name}-container`, `components/${name}.html`);
  });
};
