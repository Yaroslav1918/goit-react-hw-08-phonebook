import s from "../Title/Title.module.css";

const Title = ({ name }) => {
  return <h2 className={s.title}>{name}</h2>;
};

export default Title;
