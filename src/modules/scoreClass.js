class scoreClass {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  addScoreDOM = () => {
    const ul = document.querySelector('#leaderboad-ul');
    const li = document.createElement('li');
    const para = document.createElement('p');
    para.textContent = this.user;
    const span = document.createElement('span');
    span.textContent = this.score;
    li.appendChild(para);
    li.appendChild(span);
    ul.appendChild(li);
  }
}

export default scoreClass;