const LoginLayout = ({ children }: ILoginLayoutProps) => {
  return (
    <main className="grid place-items-center min-w-full min-h-screen bg-gray-700">
      {children}
    </main>
  );
};

export default LoginLayout;

interface ILoginLayoutProps {
  children: React.ReactNode;
}