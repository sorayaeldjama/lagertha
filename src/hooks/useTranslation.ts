
import { changeAuthenticationPageFields } from '@/actions/authentication';
import { changeMainPageFields } from '@/actions/main';
import store from '@/store';
import axios from 'axios';
import { useEffect } from 'react';
import en from '../../public/dictionaries/en.json'
import fr from '../../public/dictionaries/fr.json'




type UseTranslation = (index: string) => string

interface Translation {
  [key: string]: string
}

interface Translations {
  default: Translation;
  [key: string]: Translation;
}

const translations: Translations = {
  fr: fr,
  en: en,
  default: en
}

export const useTranslation = (): { t: UseTranslation } => {

  const navigatorLocale = navigator.language
  const currentLanguage = localStorage.getItem('locale')
  let locale = currentLanguage || navigatorLocale.substring(0, 2)
  if (!translations[locale]) {
    locale = 'default'
  }


  useEffect(() => {
    // fetchTranslations(locale)

  }, [locale])


  const t: UseTranslation = (index: string) => {
    const translation = translations[locale]
    const translatedValue = translation[index];
    return (translatedValue || index)
    .replace('{{APP_TITLE}}', process.env.NEXT_PUBLIC_APP_TITLE || '')
    .replace('{{APP_FOOTER}}', '')
    .replace('{{APP_TITLE_LOWER_CASE}}',process.env.NEXT_PUBLIC_APP_TITLE_LOWER_CASE || '')
    .replace('{{API_TITLE}}',process.env.NEXT_PUBLIC_API_TITLE || '')
    .replace('{{API_TITLE_UPPER}}',process.env.NEXT_PUBLIC_API_TITLE_UPPER_CASE|| '')
    .replace('{{COMPANY_NAME}}',process.env.NEXT_PUBLIC_COMPANY|| '')
    .replace('{{COMPANY_NAME_UPPER}}',process.env.NEXT_PUBLIC_COMPANY_UPPER_CASE|| '')
    .replace('{{COMPANY_CAPITAL}}',process.env.NEXT_PUBLIC_COMPANY_CAPITAL|| '')
    .replace('{{PUBLICATION_DIRECTOR}}',process.env.NEXT_PUBLIC_PUBLICATION_DIRECTOR|| '')
    .replace('{{ADDRESS_NAME}}',process.env.NEXT_PUBLIC_ADDRESS_NAME|| '')
    .replace('{{ADDRESS_STREET}}',process.env.NEXT_PUBLIC_ADDRESS_STREET|| '')
    .replace('{{ADDRESS_COUNTERY}}',process.env.NEXT_PUBLIC_ADDRESS_COUNTERY|| '')
    .replace('{{ADDRESS_CITY}}',process.env.NEXT_PUBLIC_CITY|| '')
    .replace('{{IDENTIFICATION_NUMBER}}',process.env.NEXT_PUBLIC_IDENTIFICATION_NUMBER|| '')
    .replace('{{INTRA_COMMUNITY_VAT}}',process.env.NEXT_PUBLIC_INTRA_COMMUNITY_VAT|| '')

    

    
  }

  return { t }
}
