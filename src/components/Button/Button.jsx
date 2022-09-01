import { Btn } from './Button.styled';

const Button = ({ btnText, bgc, onClick }) => {
  return (
    <Btn onClick={onClick} bgc={bgc}>
      {btnText}
    </Btn>
  );
};

export default Button;
