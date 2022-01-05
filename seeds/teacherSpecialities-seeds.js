const sequelize = require('../config/connection');

async function seedTeacherSpecialities() {
  await sequelize.query(
    'INSERT INTO teacher_specialties (created_at, updated_at, teacher_id, specialties_id) VALUES (NOW(), NOW(), 1, 1), (NOW(), NOW(), 1, 2), (NOW(), NOW(), 1, 3), (NOW(), NOW(), 1, 4), (NOW(), NOW(), 2, 3), (NOW(), NOW(), 2, 4), (NOW(), NOW(), 2, 5), (NOW(), NOW(), 2, 6); '
  )
};

module.exports = seedTeacherSpecialities;