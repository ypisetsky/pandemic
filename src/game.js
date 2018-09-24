'use strict';

import {CardData} from './card';

function makeInitialCards(data) {
  const ret = [];
  for (const city of data) {
    for (let i = 0; i < city.Count; i++) {
      ret.push(new CardData(city.Name, city.Color));
    }
  }
  return ret;
}

export {
  makeInitialCards,
};
