const mainEl = document.querySelector('main');
const bodyEl = document.querySelector('body');

function scheduleTimeslot(event) {
  if (event.target.className !== 'schedule-lesson-btn') {
    return;
  }

  mainEl.className = 'mainModalOn';
  bodyEl.className = 'bodyModalOn';

  const teacherName = document.querySelector('h2').innerHTML;
  const lessonTime = event.target.previousElementSibling.innerHTML;

  // create elements
  const modalWrapperEl = document.createElement('div');
  modalWrapperEl.className = 'modal';

  const modalHeaderEl = document.createElement('div');
  modalHeaderEl.className = 'modal-header';
  modalHeaderEl.innerHTML = `Lesson with ${teacherName} <hr /> <i class="far fa-clock"></i> ${lessonTime}`;

  const formEl = document.createElement('form');
  formEl.className = 'schedule-timeslot-form';
  formEl.dataset.timeslot_id = event.target.dataset.timeslot_id;

  /*  TO BE ADDED IN FUTURE  */
  // const startDateWrapperEl = document.createElement('div');
  // const endDateWrapperEl = document.createElement('div');

  // const startDateLabelEl = document.createElement('label');
  // startDateLabelEl.setAttribute('for', 'start-date-input');
  // startDateLabelEl.innerHTML = 'start date: ';

  // const startDateInputEl = document.createElement('input');
  // startDateInputEl.setAttribute('type', 'date');
  // startDateInputEl.setAttribute('id', 'start-date-input');
  // startDateInputEl.setAttribute('name', 'start-date-input');

  // const endDateLabelEl = document.createElement('label');
  // endDateLabelEl.setAttribute('for', 'end-date-input');
  // endDateLabelEl.innerHTML = 'end date: ';

  // const endDateInputEl = document.createElement('input');
  // endDateInputEl.setAttribute('type', 'date');
  // endDateInputEl.setAttribute('id', 'end-date-input');
  // endDateInputEl.setAttribute('name', 'end-date-input');

  const cancelButtonEl = document.createElement('button');
  cancelButtonEl.setAttribute('id', 'cancel-schedule');
  cancelButtonEl.innerHTML = 'cancel';

  const submitButtonEl = document.createElement('button');
  submitButtonEl.setAttribute('type', 'submit');
  submitButtonEl.innerHTML = 'submit';

  // append elements
  // startDateWrapperEl.append(startDateLabelEl, startDateInputEl);
  // endDateWrapperEl.append(endDateLabelEl, endDateInputEl);

  formEl.append(
    //startDateWrapperEl,
    //endDateWrapperEl,
    cancelButtonEl,
    submitButtonEl
  );

  modalWrapperEl.append(modalHeaderEl, formEl);

  bodyEl.append(modalWrapperEl);

  // add listeners
  cancelButtonEl.addEventListener('click', closeModal);
  formEl.addEventListener('submit', submitSchedule);
}

document
  .querySelector('.schedule-wrapper')
  .addEventListener('click', scheduleTimeslot);

async function submitSchedule(event) {
  event.preventDefault();

  /*  TO BE ADDED IN FUTURE  */
  // get data
  // const startDate = document.getElementById('start-date-input').value;
  // let endDate = document.getElementById('end-date-input').value;
  const timeslot_id = document.querySelector('form').dataset.timeslot_id;

  /*  TO BE ADDED IN FUTURE  */
  // if (startDate === '') {
  //   alert('Please enter a start date');
  //   return;
  // }

  // if (endDate === '') {
  //   endDate = null;
  // }

  const date = new Date().toJSON().substring(0, 10);

  // package data
  const data = {
    start_date: date,
    end_date: null,
    timeslot_id: timeslot_id,
  };

  const response = await fetch('/api/lessons', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  mainEl.className = '';
  bodyEl.className = '';

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

function closeModal(event) {
  mainEl.className = '';
  bodyEl.className = '';
  document.querySelector('.modal').remove();
}
