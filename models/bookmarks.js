module.exports = function(sequelize, DataTypes) {
    var Bookmarks = sequelize.define("Bookmarks", {
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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,200],
          notEmpty: true
        }
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            max:5,
            min: 1
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
    return Bookmarks;
  };
  