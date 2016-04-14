export default function addEvent(parent, el) {
  const text = parent.dataset.tourText || 'Now that I have your attention!';
  el.addEventListener('click', () => {
    alert(text);
  });
  return el;
}
