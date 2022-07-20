class scoreClass {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addScoreDOM = () => {
    const ul = document.querySelector('#leaderboad-ul');
    const li = document.createElement('li');
    const para = document.createElement('p');
    para.textContent = this.name;
    const span = document.createElement('span');
    span.textContent = this.score;
    li.appendChild(para);
    li.appendChild(span);
    ul.appendChild(li);
  }
}

export default scoreClass;