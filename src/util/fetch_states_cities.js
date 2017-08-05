import { usStateAbbr } from './us_states';

const cities = require("cities");

/**
 * Function to get all the entries which mention cities in object.
 * @param stateAbbr Abbreviation for state.
 */
function getCityEntriesForState(stateAbbr) {
  const allEntries = cities.findByState(stateAbbr);
  const cityEntries = [];
  for(var i=0; i<allEntries.length; i++) {
    cityEntries.push(allEntries[i].city);
  }
  return cityEntries;
}

/**
 * Function to get US State Abbreviations that can be used later.
 * Just got the state abbreviations and stored it in separate module.
 */
export function getUSStateAbbreviations() {
  return usStateAbbr;
}

/**
 * Function to get unique city entries for the given state. Here we can pass
 * cityEntries as an iterable object to ES6 Set native object. It would create
 * a unique set which we can convert back to array by using spread operator.
 * @param stateAbbr Abbreviation for state.
 */
export function getUniqueCitiesForThisState(stateAbbr) {
  return [...new Set(getCityEntriesForState(stateAbbr))]
}
