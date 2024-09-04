'use client'
import View from './View';

type Props = {
  children: React.ReactNode
}

const ViewModel: React.FC<Props> = ({
  children
}) => {
  
  return (
    <View>{children}</View>
  );
};

export default ViewModel;

