import { FC } from "react";
import Koval from "../../assets/note-koval.jpg";
import cls from "./Card.module.scss";


const Card: FC = () => {
  return (
    <> 
      <div className={cls.container}>
      <div className={cls.box}>
        <div className={cls.content}>
           <div className={cls.title}>TITLE</div>
                <img src={Koval} className={cls.img}/>
             
                 <div className={cls.text}>
            odjvdfmvpld,p;d',odjvdfmvpld,p;d'.' 
                  bygiuhnoiojokk,pl[
                    vuhbkjlnk;ml',;cygvuhbijnokm;lbjn
                    vyvuyb
                  ]
                 </div>
          
        </div>
      </div>
    </div>
    </>
 
  );
};

export default Card;
