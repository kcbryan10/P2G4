function checkDay(dayOne, dayTwo) {
  return dayOne === dayTwo ? true : false;
}

function isAvailable(timeslot) {
  return timeslot.lessons.length ? false : true;
}

module.exports = { checkDay, isAvailable };
