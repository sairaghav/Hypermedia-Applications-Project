/*
Generated automatically by Sequelize cli when running sequelize-cli model:generate --name xyz and --attributes field_name:field_type
*/
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  members.init({
    name: DataTypes.TEXT,
    short_description: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    designation: DataTypes.TEXT,
    area: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'members',
  });
  return members;
};