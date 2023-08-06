import { Home, Users } from 'react-feather';
import Link from 'next/link';

const SideBar = () => {
  const nodes = [
    {
      icon: <Home />,
      href: '/',
      label: 'Home',
    },
    {
      icon: <Users />,
      href: '/team',
      label: 'Team',
    },
  ];

  return (
    <ul>
      {nodes.map((node) => (
        <Link
          href={node.href}
          key={node.label}
        >
          {node.icon}
          {node.label}
        </Link>
      ))}
    </ul>
  );
};

export default SideBar;
