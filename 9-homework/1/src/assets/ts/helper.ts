const textBox = (title: string, subtext: string) => {
  return `<div class="card__subtitle-text-block">
                <h3 class="title">${title}</h3>
                <p class="subtext">${subtext}</p>
        </div>`;
};
const getStatus = (status: string) => {
  return (status === "Alive") ? "green" : (status === "Dead" ? "red" : "gray");
};
const newCard = (
  img: string,
  name: string,
  status: string,
  species: string,
  origins: string,
  location: string,
  firstSeen: string
): string => {
  return (
    `<div class="card">
            <img src="${img}" alt="charter" class="card__img">
            <div class="card__text-area">
                <div class="card__title">
                    <h2 class="card__title-text">${name}</h2>
                    <p class="card_title-subtext"><div class="circle ` +
    getStatus(status) +
    `"></div>${status} - ${species}</p>
                </div>
                <div class="card__subtitle">
                ` +
    textBox("Origins:", origins) +
    textBox("Last know location:", location) +
    textBox("First seen in:", firstSeen) +
    `
                </div>
            </div>
        </div>`
  );
};

export { newCard };
