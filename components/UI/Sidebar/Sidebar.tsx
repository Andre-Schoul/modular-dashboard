import Link from 'next/link';
import { FunctionComponent, useState } from 'react';

import styles from './Sidebar.module.scss';

import { /*FaComment, */FaArrowRight } from 'react-icons/fa'; 
import { FiDatabase, FiMessageCircle, FiUsers } from 'react-icons/fi'; 
import { RiFileLine, RiLayoutLine } from 'react-icons/ri'; 
import { BsGraphUp, BsPuzzle } from 'react-icons/bs';
import { VscSymbolColor } from 'react-icons/vsc';

const sidebarSmall = '66px';
const sidebarBig = '200px';
let isBig = false;

const toggleSidebar = () => {
  if (isBig) {
    document.documentElement.style.setProperty("--sidebar-width", sidebarSmall);
    document.documentElement.style.setProperty("--sidebar-icon", '0deg');
  } else {
    document.documentElement.style.setProperty("--sidebar-width", sidebarBig);
    document.documentElement.style.setProperty("--sidebar-icon", '180deg');
  }
  isBig = !isBig;
};

const Sidebar: FunctionComponent = (props) => {

  const [hideOverflow, setHideOverflow] = useState(false);

  const toggleOverflow = () => {
    setHideOverflow(true);
    setTimeout(() => setHideOverflow(false), 400);
  }

  return (
    <>
      <nav className={styles.SideNavbar}>
        <div className={styles.LogoWrapper}><Link href='/dashboard'><a><span className={styles.Logo}>LOGO</span><span className={styles.Title}>Dashboard</span></a></Link></div>
        <ul className={styles.Nav}>
          <li><Link href='/statistics'><a onClick={toggleOverflow}><span className={styles.Icon}><BsGraphUp /></span><span className={styles.Title}>Statistics</span></a></Link></li>
          <li><Link href='/database'><a onClick={toggleOverflow}><span className={styles.Icon}><FiDatabase /></span><span className={styles.Title}>Database</span></a></Link></li>
          <li><Link href='/components'><a onClick={toggleOverflow}><span className={styles.Icon}><BsPuzzle /></span><span className={styles.Title}>Components</span></a></Link></li>
          <li><Link href='/pages'><a onClick={toggleOverflow}><span className={styles.Icon}><RiFileLine /></span><span className={styles.Title}>Pages</span></a></Link></li>
          <li><Link href='/[...slug]' as='/layout'><a><span className={styles.Icon}><RiLayoutLine /></span><span className={styles.Title}>Layout</span></a></Link></li>
          <li><Link href='/[...slug]' as='/color'><a><span className={styles.Icon}><VscSymbolColor /></span><span className={styles.Title}>Color</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiUsers /></span><span className={styles.Title}>Team</span></a></Link></li>
          <li><Link href='/[id]'><a><span className={styles.Icon}><FiMessageCircle style={{transform: 'scaleX(1.2)'}}/></span><span className={styles.Title}>Chat</span></a></Link></li>
        </ul>
        <div className={styles.ToggleSidebar} onClick={toggleSidebar}><div><FaArrowRight /></div></div>
      </nav>
      <div className={`${styles.Main} ${hideOverflow ? styles.HideOverflow : ''}`}>{props.children}</div>
    </>
  )
}

export default Sidebar;