"use client";
import {
  Card,
  Typography,
  Input,
  Button,
  Alert,
  Box,
  Checkbox,
  List,
  ListItem,
  IconButton,
  ChipDelete,
  Chip,
  Avatar,
  Divider,
} from "@mui/joy";
import NewLinkPassword from "../NewLinkPassword";
import NewLinkUploadFile from "../NewLinkUploadFile";
import styles from "./styles.module.scss";
import { StepEnum } from "@/enums/steps.enum";
import ReportIcon from "@mui/icons-material/Report";
import { DeleteRounded, InfoOutlined } from "@mui/icons-material";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  onChangeNewLinkName: (e: React.BaseSyntheticEvent) => void;
  newLinkName: string;
  linkNameError: boolean;
  emails: string[];
  emailField: string;
  onChangeEmailField: (e: React.BaseSyntheticEvent) => void;
  onSubmitEmail: (e: React.BaseSyntheticEvent) => void;
  deleteEmail: (email: string) => VoidFunction;
  errorEmail: boolean;
};
const View: React.FC<Props> = ({
  onChangeNewLinkName,
  newLinkName,
  linkNameError,
  emails,
  emailField,
  onChangeEmailField,
  onSubmitEmail,
  deleteEmail,
  errorEmail,
}) => {

  const { t } = useTranslation()


  return (
    <>
      <div className={styles.newLinkName}>
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Typography level="title-md" sx={{ fontWeight: "bold" }}>
            {t('new_link_Form_Link_Name_Text1')}

          </Typography>
          <Typography level="body-sm">
            {t('new_link_Form_Link_Name_Text2')}
          </Typography>

          <Input
            size="md"
            name="Link name"
            placeholder={t('new_link_Form_Link_Name_Place_Holder')}
            onChange={onChangeNewLinkName}
            value={newLinkName}
            error={linkNameError}
            sx={{
              marginTop: 2,
              marginBottom: 1,
            }}
          />
          {linkNameError && (
            <Alert
              sx={{ alignItems: "flex-start", marginBottom: 1 }}
              variant="soft"
              color="danger"
              startDecorator={<ReportIcon />}
            >
              <div>
                <div>Oups!</div>
                <Typography level="body-sm" color="danger">
                  {t('new_link_Form_Link_Name_Alert1')}

                </Typography>
              </div>
            </Alert>
          )}
          <Alert startDecorator={<InfoOutlined />} variant="soft">
            <Typography level="body-xs">
              {t('new_link_Form_Link_Name_Alert2')}

            </Typography>
          </Alert>
        </Box>
        <Divider />
        <Box sx={{ marginTop: 2 }}>
          <Typography level="title-md" sx={{ fontWeight: "bold" }}>
            {t('new_link_Form_Link_Name_Email')}
          </Typography>
          <Typography level="body-sm">
            {t('new_link_Form_Link_Name_Send_By_Email')}
          </Typography>
          {/* <Checkbox
            label="I want to send my link by email (free)"
            size="sm"
            checked={addEmail}
            onChange={onChangeIsSendEmail}
          /> */}
          <form onSubmit={onSubmitEmail}>
            <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
              <Input
                sx={{ with: "100%" }}
                placeholder={t('new_link_Form_Link_Email_Place_Holder')}
                fullWidth
                value={emailField}
                onChange={onChangeEmailField}
                error={errorEmail}
              />
              <Button variant="outlined" type="submit">
                {t('new_link_Form_Link_Name_Add_Button')}
              </Button>
            </Box>
          </form>
          <List>
            {emails.map((email) => (
              <ListItem key={email}>
                <Chip
                  size="lg"
                  variant="outlined"
                  color="primary"
                  startDecorator={<Avatar />}
                  endDecorator={<ChipDelete onDelete={deleteEmail(email)} />} >
                  {email}
                </Chip>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    </>
  );
};
export default View;
