import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import LogoWhite from './LogoWhite';
import LanguageSwitch from './LanguageSwitch';

const Header = ({ title, root = '' }) => {
  const { t } = useTranslation('common');

  const signOutUrl = '/.auth/logout?post_logout_redirect_uri=/';

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    let lastScrollPos = window.scrollY;

    const handleScroll = () => {
      if (lastScrollPos < window.scrollY && window.scrollY >= 100) {
        setIsHeaderVisible(false);
      } else if (lastScrollPos > window.scrollY) {
        setIsHeaderVisible(true);
      }
      lastScrollPos = window.scrollY;
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header
        className="h-16 lg:h-auto bg-coal text-cloud p-2 fixed w-full top-0 right-0 left-0 z-50 transition-all"
        style={isHeaderVisible ? { transform: 'translateY(0)' } : { transform: 'translateY(-100%)' }}
      >
        <div className="lg:hidden w-32 h-full flex justify-center">
          <a href={`${root}#marabu`} className="flex items-center w-full h-full">
            <LogoWhite />
          </a>
        </div>
        <div className="absolute right-0 top-0 flex justify-center lg:hidden">
          <div>
            <LanguageSwitch />
          </div>
          <a className="p-5" href={`${signOutUrl}`}>
            {t('SignOut')}
          </a>
        </div>
        <div
          className={`absolute top-16 left-0 right-0 max-w-[1380px] bg-coal mx-auto lg:flex justify-between content-center w-full transition-all lg:static lg:translate-x-0 translate-x-[100%]`}
        >
          <div className="flex flex-wrap content-center border-r px-4">
            <a href={`${root}#marabu`}>
              <LogoWhite style={{ height: '32px' }} />
            </a>
          </div>
          <div className="flex justify-center">
            <div>
              <LanguageSwitch />
            </div>
            <a className="p-5" href={`${signOutUrl}`}>
              {t('SignOut')}
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
