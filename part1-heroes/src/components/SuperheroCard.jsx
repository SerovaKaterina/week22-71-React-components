import React from "react";

function SuperheroCard (props) {
    const {name, universe, alterego, occupation, friends, superpowers, url} = props;
    return (
    <article class="card">
    <h2 class="card__name">Имя: {name}</h2>
    <p class="card__universe">Вселенная: {universe}</p>
    <p class="card__alterEgo">Альтер эго: {alterego}</p>
    <p class="card__whoIs">Специальность: {occupation}</p>
    <p class="card__friends">Друзья: {friends}</p>
    <p class="card__abilities">Способности: {superpowers}</p>
    <img src={url} alt="foto" />
</article>
)
}
export default SuperheroCard;