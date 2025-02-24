import ContentHeader from "../ContentHeader";
import undefinedIcon from "../../../assets/icons/undefined.png";

export default function UndefinedPage() {
  return (
    <section>
      <ContentHeader source={undefinedIcon} name="404 - Страница не найдена" />
    </section>
  );
}
