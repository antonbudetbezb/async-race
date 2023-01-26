export async function finishAnimation(target: HTMLElement): Promise<string> {
  const car = target.parentElement?.nextElementSibling?.firstElementChild as HTMLElement;

  const offset = (car.getBoundingClientRect().left * 0.8).toString();
  car.style.transition = '1s all ease'
  car.style.left = offset;
  return 'ok'
}