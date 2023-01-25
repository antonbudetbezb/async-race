export function setRandomColor(element: HTMLElement): void {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  element.style.fill = color;
}