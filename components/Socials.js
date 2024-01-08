//Links
import Link from 'next/link';

//icons
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri';

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.instagram.com/reza_edi_saputra?igsh=YXFxbWxrZzYyZzhh'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine/>
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100011027269048&mibextid=gik2fB'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookBoxLine/>
    </Link>
    <Link href={'https://wa.me/081991545653'} className='hover:text-accent transition-all duration-300'>
      <RiWhatsappLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/reza-edi-saputra-0b60a4256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinBoxLine/>
    </Link>
    <Link href={'https://github.com/REZA1611'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
