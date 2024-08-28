import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

class CardModel extends Model {}
CardModel.init(
  {
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    data: DataTypes.DATE,
    id: DataTypes.NUMBER,
  },
  {
    sequelize,
    modelName: "card",
  }
);
//на будущее: создать еще одну модель для User и связать её с помощью:
//UserModel.hasOne(CardModel, { foreignKey: 'userId' });
//CardModel.belongsTo(UserModel, { foreignKey: 'userId' });

//(+ вставить в модель User проверку на валидность через id как в документации Sequalize)

CardModel.sync(); //связываем модель с базой данных
