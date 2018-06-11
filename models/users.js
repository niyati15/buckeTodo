module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
      name: {
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
  