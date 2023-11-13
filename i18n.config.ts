import en from '@/assets/locale/en.json';
import es from '@/assets/locale/en.json';
import de from '@/assets/locale/en.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    es,
    de,
  }
}))