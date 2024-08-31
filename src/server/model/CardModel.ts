import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
});


class CardModel extends Model {}
CardModel.init(
  {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    data: DataTypes.DATE,
    img: {type: DataTypes.STRING, unique: true, allowNull: false},
    id: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
  },
  {
    sequelize,
    modelName: "card",
  }
);

export { CardModel };

//на будущее: создать еще одну модель для User и связать её с помощью:
//UserModel.hasOne(CardModel, { foreignKey: 'userId' });
//CardModel.belongsTo(UserModel, { foreignKey: 'userId' });

//(+ вставить в модель User проверку на валидность через id как в документации Sequalize)

//связываем модель с базой данных
//CardModel.sync();
