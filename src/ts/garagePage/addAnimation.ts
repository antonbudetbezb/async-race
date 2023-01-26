export async function addAnimation(velocity:string, target: HTMLElement): Promise<string> {
  const car = target.parentElement?.nextElementSibling?.firstElementChild as HTMLElement;
  const parentWidth = car?.parentElement?.offsetWidth as number;
  const time = 500 / +velocity;

  car.style.transition = `all ${time}s ease`;
  car.style.left = `90%`;
  return 'ok'
}