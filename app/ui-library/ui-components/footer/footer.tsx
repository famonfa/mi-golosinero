import { Columns } from '../columns/columns';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../assets/instamenu.svg';
import { footerStyles, logoStyles } from './footer.css';

export const Footer = () => {
  return (
    <div className={footerStyles}>
      <Columns css={{ padding: 16 }}>
        <Link href="/">
          <Image src={img} className={logoStyles} width={120} height={160} alt="instamenu" />
        </Link>
      </Columns>
    </div>
  );
};
