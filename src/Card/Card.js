import React from "react";
import Tachyons from "tachyons";

function Card(props) {
  return (
    <a
      class="db center mw5 tc black link dim"
      title="Green Dress with Gold Necklace"
      href="https://www.facebook.com/morninggloriesboutique/photos/a.212922799433328.1073741831.211280796264195/212922779433330/?type=3&theater"
    >
      <img
        class="db ba b--black-10"
        alt="Green Dress with Gold Necklace"
        src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/34182700_212922786099996_7300620216155766784_n.jpg?_nc_cat=0&oh=e43429d226ffa8443f5bece25a0498c7&oe=5C07D2CE"
      />

      <dl class="mt2 f6 lh-copy">
        <dt class="clip">Dress</dt>
        <dd class="ml0">Green Dress $30</dd>
        <dt class="clip">Neckace</dt>
        <dd class="ml0 gray">Gold Necklace $15</dd>
      </dl>
    </a>
  );
}

export default Card;
