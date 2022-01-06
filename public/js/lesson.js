async function deleteLesson(event) {
  if (
    event.target.className !== 'delete-lesson-btn' &&
    event.target.className !== 'far fa-trash-alt'
  ) {
    return;
  }
  const lessonId = event.target.dataset.lesson_id;

  const response = await fetch(`/api/lessons/${lessonId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.schedule-wrapper')
  .addEventListener('click', deleteLesson);
