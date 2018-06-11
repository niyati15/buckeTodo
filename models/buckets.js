module.exports = function(sequelize, DataTypes) {
    var Buckets = sequelize.define("Buckets", {
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

  Buckets.associate = function(models) {
    // When a Bucket is deleted, also delete any associated Bookmarks
    Buckets.hasMany(models.Bookmarks, {
      onDelete: "cascade"
    });
  };

  return Buckets;
};
  