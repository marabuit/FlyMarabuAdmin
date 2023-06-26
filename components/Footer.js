import LogoWhite from './LogoWhite';

const Footer = ({ root = '' }) => {
  return (
    <footer className="bg-coal text-cloud px-5 pt-32">
      <div className="flex max-w-6xl mx-auto flex-col lg:flex-row">
        <div className="w-full max-w-[18rem] lg:w-1/3 border-l px-5 lg:px-10 pb-10">
          <a href={`${root}#marabu`}>
            <LogoWhite />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
