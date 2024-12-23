/*cart.js*/
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Cart() {
  const router = useRouter();

  useEffect(() => {
    // Get the device language
    const deviceLanguage = navigator.language.slice(0, 2);

    // Define the supported languages and their corresponding routes
    const supportedLanguages = ['en', 'es', 'pt', 'tr', 'ru'];
    const languageRoutes = {
      es: '/es/cart'
    };

    // Redirect to the corresponding language page if the device language is supported
    if (supportedLanguages.includes(deviceLanguage)) {
      router.push(languageRoutes[deviceLanguage]);
    } else {
      // If the device language is not supported, fallback to a default language (e.g., English)
      router.push('/es');
    }
  }, [router]);

  return null;

}
