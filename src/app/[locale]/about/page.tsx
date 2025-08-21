import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <Link href="/">{t("jump_home")}</Link>
    </div>
  );
}
