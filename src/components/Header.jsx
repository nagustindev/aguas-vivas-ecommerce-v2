function Header() {
  return (
    <div className="p-4 sm:p-6 md:p-7 h-screen box-border">
      <header className="w-full h-full bg-no-repeat bg-center bg-cover bg-[url('/images/header.webp')] flex items-center justify-center rounded-3xl">
        <h1 className="font-[Chicle] text-secondary text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center leading-tight">
          Aguas Vivas
        </h1>
      </header>
    </div>
  );
}

export default Header;
