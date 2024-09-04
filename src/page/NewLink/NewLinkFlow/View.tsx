"use client";
import NewLinkForm from "./NewLinkForm";
import NewLinkConfirm from "./NewLinkConfirm";
import NewLinkLoader from "./NewLinkLoader";
import styles from "./styles.module.scss";

type Props = {
  loader: boolean;
  isNewLinkCreated: boolean;
};

const View: React.FC<Props> = ({
  loader,
  isNewLinkCreated
}) => {
  return (
    <>
      {loader ? (
        <NewLinkLoader />
      ) : (
        <>{isNewLinkCreated ? <NewLinkConfirm /> : <NewLinkForm />}</>
      )}
    </>
  );
};

export default View;
