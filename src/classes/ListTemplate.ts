import { HasFormatter } from '../interfaces/HasFormatter';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
    const li = document.createElement('li');
    li.id = Date.now().toString();

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    li.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const elem = document.getElementById(li.id);
      elem?.remove();
    });

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
