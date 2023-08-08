import { Home, Users } from 'react-feather';
import Link from 'next/link';

import classes from '@/styles/layout/sidebar.module.scss';

const SideBar = () => {
  const nodes = [
    {
      icon: (
        <Home
          color='#333'
          size={38}
        />
      ),
      href: '/',
      label: 'Home',
    },
    {
      icon: (
        <Users
          color='#333'
          size={38}
        />
      ),
      href: '/team',
      label: 'Team',
    },
  ];

  return (
    <nav className={classes.sideBar}>
      <ul>
        {nodes.map((node) => (
          <Link
            href={node.href}
            key={node.label}
            className={classes.linkContainer}
          >
            {node.icon}
            <span>{node.label}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
