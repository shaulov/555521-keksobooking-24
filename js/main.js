import {similarAdNearby} from './data';

'use strict';

const SIMILAR_AD = [];
const SIMILAR_AD_COUNT = 10;

for (let currentObject = 0; currentObject < SIMILAR_AD_COUNT; currentObject++) {
  SIMILAR_AD.push(similarAdNearby(currentObject));
  SIMILAR_AD[currentObject]['offer'].address = `${SIMILAR_AD[currentObject]['location'].lat}, ${SIMILAR_AD[currentObject]['location'].lng}`;
}
console.log(SIMILAR_AD);
