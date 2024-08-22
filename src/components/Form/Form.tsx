import { FC } from 'react';
import cls from './Form.module.scss';

interface  FormProps {

 className?: string;

}

const Form: FC = () => {

 return (

<div className={cls.container}>
    <div>

    </div>
<form>
    <input/>

</form>
 </div>

 );

};

export default Form;