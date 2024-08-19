import Sidebar from './sidebar';

type PrivateLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 p-8">{children}</div>
    </div>
  );
}

export default PrivateLayout;
