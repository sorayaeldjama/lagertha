'use client'
import { Box, Button, SvgIcon, Typography, styled } from '@mui/joy';
import styles from './styles.module.scss';
import ImageIcon from '@mui/icons-material/Image';
import ClearIcon from "@mui/icons-material/Clear";

type Props = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  OnClickDeleteFile: (index: number) => void;
  selectedLogo: File | null;
}

const View: React.FC<Props> = ({
  handleFileChange,
  OnClickDeleteFile,
  selectedLogo
}) => {
  const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
  return (
    // <div className={styles.logoparameter}>
    //   <Box sx={{
    //     display: 'flex',
    //     gap: 2,
    //     flexDirection: "column"
    //   }}>
    //     <Box >
    //       <Typography level="h4"
    //         sx={{ marginBottom: 2, fontWeight: "bold", marginTop: 1 }}>
    //         Change Logo :
    //       </Typography>

    //       <Button
    //         className={styles.textfield}
    //         component="label"
    //         role={undefined}
    //         tabIndex={-1}
    //         variant="outlined"
    //         color="neutral"
    //         startDecorator={
    //           <SvgIcon>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={1.5}
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
    //               />
    //             </svg>
    //           </SvgIcon>
    //         }
    //       >
    //         Choose  Logo
    //         {/* {selectedFiles.length > 0 ? t('new_link_New_Link_Upload_File_Button_Upload another_file') : t('new_link_New_Link_Upload_File_Button_Upload_a_file') }           */}

    //         <VisuallyHiddenInput type="file" onChange={handleFileChange} />
    //       </Button>
    //     </Box>
    //   </Box>
    //   {selectedLogo && (

    //     <Box className={styles.box} sx={{ marginTop: 2 }}>

    //       <ImageIcon sx={{ fontSize: "3rem", opacity: 0.2, marginRight: 1 }}
    //       ></ImageIcon>
    //       {selectedLogo.name}
    //       {/* <ClearIcon onClick={() => OnClickDeleteFile()} /> */}

    //     </Box>


    //   )

    //   }
    // </div>
    <div></div>
  );
};

export default View;