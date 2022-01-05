const sequelize = require('../config/connection');
const { Specialties } = require('../models');

const specialitiesData = [
  {
    specialty_name: 's1'
  },
  {
    specialty_name: 's2'
  },
  {
    specialty_name: 's3'
  },
  {
    specialty_name: 's4'
  },
  {
    specialty_name: 's5'
  },
  {
    specialty_name: 's6'
  }
];

const seedSpecialities = () => Specialties.bulkCreate(specialitiesData);

module.exports = seedSpecialities;