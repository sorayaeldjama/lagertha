"use client";
import View from "./View";

type Props = {
  coins: number;
};

const ViewModel: React.FC<Props> = ({ coins }) => {
  return <View {...{ coins }} />;
};

export default ViewModel;
