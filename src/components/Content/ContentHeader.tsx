import classes from "./Content.module.scss";

interface ContentHeaderProps {
  source: string;
  name?: string;
}

export default function ContentHeader({
  source,
  name = "Название",
}: ContentHeaderProps) {
  return (
    <div className={classes.header}>
      <img className={classes.header__icon} src={source} alt={name} />
      <p className={classes.header__title}>{name}</p>
    </div>
  );
}
