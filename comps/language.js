import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LanguageDropdown = () => {
  const router = useRouter();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    // Redirect to the corresponding language page
    router.push(`/${selectedLanguage}`);
  };

  return (
    <div className="dropdown">
      <select className="dropdown-select" onChange={handleLanguageChange}>
        <option value="select">文A</option>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}

export default LanguageDropdown;