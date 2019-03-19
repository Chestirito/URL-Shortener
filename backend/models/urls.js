module.exports = function(Sequelize, DataTypes) {
    var User = Sequelize.define("URLS", {
      // Giving the Author model a name of type STRING
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
              msg: 'Null url'
            },
            notEmpty: {
                msg: 'Empty url'
            },
            isUrl: {
                msg: 'invalid url'
            }
        }
      },
      shortCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
              msg: 'No Shortcode generated'
            },
            notEmpty: {
                msg: 'No empty chortcode'
            }
        }
      },
      requested: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      submitted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
    },
    {
    timestamps: false
    });
  
    return User;
  };
  