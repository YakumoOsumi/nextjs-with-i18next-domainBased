// app/page.tsx
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import styles from './TopPage.module.scss'

export default function TopPage() {
  const t = useTranslations('TopPage');
  return (
    <div className={styles.TopPage}>
      <h1 className={styles.TopPage_title}>{t('title')}</h1>
      <Link href="/about">{t('jump_about')}</Link>
    </div>
  );
}