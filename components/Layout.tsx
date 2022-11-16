const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="artboard grid place-items-center min-h-screen"
      data-theme="cyberpunk"
    >
      {children}
    </div>
  );
};
export default Layout;
