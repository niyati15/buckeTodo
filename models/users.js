module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
          notEmpty: true
        }
      },
      confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50],
          notEmpty: true
        }
      }
    });

    Users.associate = function(models) {
       Users.hasMany(models.Bookmarks, {
         onDelete: "cascade"
       });
    };

    return Users;
  };
  