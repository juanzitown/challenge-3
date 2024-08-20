import Sidebar from './sidebar';

type PrivateLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="flex flex-row w-screen h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 pt-4 pb-16 px-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default PrivateLayout;
