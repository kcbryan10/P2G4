const DateTime = require('luxon');

function scheduleTimeslot(event) {
  if (event.target.className !== 'schedule-lesson-btn') {
    return;
  }

  const modalWrapperEl = document.createElement('div');
  modalWrapperEl.className = 'modal';

  const formEl = document.createElement('form');
  formEl.className = 'schedule-timeslot-form';

  const startDateWrapperEl = document.createElement('div');
  const endDateWrapperEl = document.createElement('div');

  const startDateLabelEl = document.createElement('label');
  startDateLabelEl.setAttribute('for', 'start-date-input');

  const startDateInputEl = document.createElement('input');
  startDateInputEl.setAttribute('type', 'date');
  startDateInputEl.setAttribute('id', 'start-date-input');
  startDateInputEl.setAttribute('name', 'start-date-input');

  const endDateInputEl = document.createElement('input');
  endDateInputEl.setAttribute('type', 'date');
  endDateInputEl.setAttribute('id', 'end-date-input');
  endDateInputEl.setAttribute('name', 'end-date-input');
}

document
  .querySelector('.available-timeslots-wrapper')
  .addEventListener('click', scheduleTimeslot);

async function submitSchedule(event) {
  //TODO: supply data
  const data = {
    start_date: '',
    end_date: '',
    timeslot_id: '',
    student_id: '',
  };

  const response = fetch('/api/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
