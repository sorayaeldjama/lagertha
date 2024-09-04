"use client";
import { NewLinkState } from "@/reducers/newLink";
import View from "./View";
import { ReduxUniversalSetter } from "@/types/ReduxUniversalSetter";

type Props = {
  // changeNewLinkPageFields: ReduxUniversalSetter<NewLinkState>;

  loader: boolean;
  isNewLinkCreated: boolean;
};

const ViewModel: React.FC<Props> = ({
  // changeNewLinkPageFields,
  loader,
  isNewLinkCreated,
}) => {
  
  return (
    <View
      {...{
        loader,
        isNewLinkCreated,
        // changeNewLinkPageFields
      }}
    />
  );
};

export default ViewModel;
