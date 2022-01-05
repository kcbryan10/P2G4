const sequelize = require('../config/connection');
const { Specialties, Teacher } = require('../models');

const specialitiesData = [
  {
    specialty_name: 'Basket Weaving',
  },
  {
    specialty_name: 'Screeching Into The Void'
  },
  {
    specialty_name: 'Being Screeched At By The Void'
  },
  {
    specialty_name: 'Star Trek Trivia'
  },
  {
    specialty_name: 'Incorrect Star Trek Trivia'
  },
  {
    specialty_name: 'Being Woven Into Baskets'
  }
];

const seedSpecialities = () => Specialties.bulkCreate(specialitiesData);

module.exports = seedSpecialities;