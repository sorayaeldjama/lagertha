'use client'
import { Role } from '@/enums/roles.enum';
import View from './View';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Page } from '@/enums/pages.enum';

type Props = {
  children: React.ReactNode;
  roles: Role[];
  isLogged: boolean
}

const ViewModel: React.FC<Props> = ({
  children,
  roles,
  isLogged
}) => {
  const router = useRouter()

  useEffect(() => {
    // if (isLogged /*&& roles.includes(Role.ROLE_CHECK_REINIT)*/) {
    //   router.push(Page.HOME)
    // }
  }, [isLogged, /*roles*/, router])
  
  return (
    <View >{children}</View>
  );
};

export default ViewModel;