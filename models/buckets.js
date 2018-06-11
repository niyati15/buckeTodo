module.exports = function(sequelize, DataTypes) {
    var Buckets = sequelize.define("Buckets", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,25],
          notEmpty: true
        }
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isURL: true
        }
      }
    });
    return Buckets;
  };
  