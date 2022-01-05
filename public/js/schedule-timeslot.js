function scheduleTimeslot(event) {
  if (event.target.className !== 'schedule-lesson-btn') {
    return;
  }

  // create elements
  const modalWrapperEl = document.createElement('div');
  modalWrapperEl.className = 'modal';

  const formEl = document.createElement('form');
  formEl.className = 'schedule-timeslot-form';
  formEl.dataset.timeslot_id = event.target.dataset.timeslot_id;

  const startDateWrapperEl = document.createElement('div');
  const endDateWrapperEl = document.createElement('div');

  const startDateLabelEl = document.createElement('label');
  startDateLabelEl.setAttribute('for', 'start-date-input');
  startDateLabelEl.innerHTML = 'start date: ';

  const startDateInputEl = document.createElement('input');
  startDateInputEl.setAttribute('type', 'date');
  startDateInputEl.setAttribute('id', 'start-date-input');
  startDateInputEl.setAttribute('name', 'start-date-input');

  const endDateLabelEl = document.createElement('label');
  endDateLabelEl.setAttribute('for', 'end-date-input');
  endDateLabelEl.innerHTML = 'end date: ';

  const endDateInputEl = document.createElement('input');
  endDateInputEl.setAttribute('type', 'date');
  endDateInputEl.setAttribute('id', 'end-date-input');
  endDateInputEl.setAttribute('name', 'end-date-input');

  const cancelButtonEl = document.createElement('button');
  cancelButtonEl.setAttribute('id', 'cancel-schedule');
  cancelButtonEl.innerHTML = 'cancel';

  const submitButtonEl = document.createElement('button');
  submitButtonEl.setAttribute('type', 'submit');
  submitButtonEl.innerHTML = 'submit';

  // append elements
  startDateWrapperEl.append(startDateLabelEl, startDateInputEl);
  endDateWrapperEl.append(endDateLabelEl, endDateInputEl);

  formEl.append(
    startDateWrapperEl,
    endDateWrapperEl,
    cancelButtonEl,
    submitButtonEl
  );

  modalWrapperEl.append(formEl);

  document.querySelector('body').append(modalWrapperEl);

  // add listeners
  cancelButtonEl.addEventListener('click', closeModal);
  formEl.addEventListener('submit', submitSchedule);
}

document
  .querySelector('.available-timeslots-wrapper')
  .addEventListener('click', scheduleTimeslot);

async function submitSchedule(event) {
  event.preventDefault();

  // get data
  const startDate = document.getElementById('start-date-input').value;
  let endDate = document.getElementById('end-date-input').value;
  const timeslot_id = document.querySelector('form').dataset.timeslot_id;

  if (startDate === '') {
    alert('Please enter a start date');
    return;
  }

  if (endDate === '') {
    endDate = null;
  }

  // package data
  const data = {
    start_date: startDate,
    end_date: endDate,
    timeslot_id: timeslot_id,
  };

  const response = fetch('/api/lessons', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

function closeModal(event) {
  document.querySelector('.modal').remove();
}
