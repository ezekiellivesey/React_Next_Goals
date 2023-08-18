import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import { SignInButton, SignOutButton } from '@/components/buttons';

export default function NavMenu() {

  return (
    <nav className="m-3">
      <ul className="flex flex-row space-x-5 font-bold text-xl">
        <li className="flex space-x-2">
        
          <Link href={'/goals'} className="flex space-x-2 place-items-center">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/mission-of-a-company.png" alt="mission-of-a-company"/> 
            <h1>Your Goals</h1>
            
            </Link>
        </li>
        <li>
          <Link href={'/tasks'} className="flex space-x-2">
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/checklist.png" alt="checklist"/>
          <h1>Your Tasks</h1>
          </Link>
        </li>
        <li>
          <SignInButton />
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}