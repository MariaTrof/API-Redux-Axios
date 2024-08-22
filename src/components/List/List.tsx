import cls from "./List.module.scss";
import { Flex } from "antd";
import { FC } from "react";
import Card from "../Card/Card";

const List: FC = () => {
  return (
    <Flex gap="middle" wrap>
      <div className={cls.container}>
        <p className={cls.title}>List of Cards:</p>
        <div className={cls.card_box}>
          <div className={cls.cards}>
            <Card />
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default List;
