type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return (
    <span className="h-6 inline-flex items-center px-2.5 rounded-xl text-xs font-medium bg-gray-200 text-gray-700">
      {children}
    </span>
  );
}

export default Badge;
