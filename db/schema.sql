DROP DATABASE IF EXISTS lesson_scheduler_db;

CREATE DATABASE lesson_scheduler_db;

SELECT * 
FROM teacher
INNER JOIN teacher_specialties ON teacher.id = teacher_specialties.teacher_id
WHERE teacher_specialties.teacher_id= teacher.id;

SELECT *
FROM specialties
INNER JOIN teacher_specialties ON specialties.id = teacher_specialties.specialties_id
INNER JOIN teacher ON teacher_specialties.teacher_id = teacher.id
WHERE teacher_specialties.specialties_id= 2;

SELECT *
FROM teacher_specialties;

INSERT INTO teacher_specialties(teacher_id, specialties_id, created_at, updated_at)
VALUES (1,1,'2022-01-05T22:24:00', '2022-01-05T22:24:00');

