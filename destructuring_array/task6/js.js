let arr = [2025, 12, 31];

function year() {
    return new Date().getFullYear();
}
function month() {
  return new Date().getMonth();
}
function day() {
  return new Date().getDay();
}
let [year = year(), month = month(), day = day()] = arr;
