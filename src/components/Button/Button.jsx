import { Btn } from './Button.styled';

const Button = ({ btnText, bgc }) => {
  return <Btn bgc={bgc}>{btnText}</Btn>;
};

export default Button;
