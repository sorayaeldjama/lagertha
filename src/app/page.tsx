import Sidebar from '@/components/Sidebar'
import Auth from '@/page/Auth'
import Signup from '@/page/Signup';
import Welcome from '@/page/Welcome'
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';


export default function HomePage() {

  // const t = useTranslations('HomePage');

  return (
    <main>
      <Welcome /> 
    </main>
  )
}
