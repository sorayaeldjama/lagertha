'use client'
import { ParameterOutput } from '@/services/openapi';
import styles from './styles.module.scss';
import {
  Divider,
  Radio,
  Sheet,
  Typography,
  Box,
  SvgIcon,
  Button,
} from '@mui/joy';
import { Theme_Color } from '@/enums/themeColor.enum';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { SelectChangeEvent } from '@mui/material';
import { useTranslation } from '@/hooks/useTranslation';
import LogoParameter from './LogoParameter';

type Props = {
  handleChange: (theme: Theme_Color) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLanguage: (event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => void;
  selectedValue: string;
  settingsParams: ParameterOutput[] | null;
  lightMode: Theme_Color | null;
  currentLanguage: string | null
};

const View: React.FC<Props> = ({
  handleChange,
  onChangeLanguage,
  settingsParams,
  selectedValue,
  lightMode,
  currentLanguage
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.parameters}>
      <Box sx={{
        display: 'flex',
        gap: 2,
        flexDirection: "column"
      }}>
        <Box >
          <Typography level="h4"
            sx={{ marginBottom: 2, fontWeight: "bold", marginTop: 1 }}>
            {t('Settings_Color_theme')}
          </Typography>
          <Sheet
            variant="outlined" color="neutral"
            sx={{
              p: 4,
              marginBottom: 1,
              backgroundColor: "white",
              borderColor: "black"
            }} />
          <Radio
            checked={lightMode === Theme_Color.LIGHT}
            onChange={handleChange(Theme_Color.LIGHT)}
            value={Theme_Color.LIGHT}
            name="radio-buttons"
            slotProps={{ input: { 'aria-label': 'A' } }}
            label={t('Settings_Parameters_Theme_Color_Label_LIGHT')}
            // variant="solid"
            color="primary"
          />
        </Box>
        <Box>
          <Sheet variant="outlined" color="neutral" sx={{
            p: 4,
            marginBottom: 1,
            backgroundColor: "black",
            borderColor: "white"
          }} />
          <Radio
            checked={lightMode === Theme_Color.DARK}
            onChange={handleChange(Theme_Color.DARK)}
            value={Theme_Color.DARK}
            name="radio-buttons"
            slotProps={{ input: { 'aria-label': 'B' } }}
            label={t('Settings_Parameters_Theme_Color_Label_DARK')}
            // variant="solid"
            color="primary"
          />
        </Box>
      </Box>
      {/* <Button onClick={onSaveChanges} sx={{ marginTop: 4 }}>Apply changes</Button> */}
      <Divider sx={{ marginTop: 3, marginBottom: 2, width: 1300 }} />
      <Box sx={{
        display: 'flex',
        gap: 2,
        flexDirection: "column"
      }}>
        <Box >
          <Typography level="h4"
            sx={{ marginBottom: 2, fontWeight: "bold", marginTop: 1 }}>
            {t('Settings_Language')}

          </Typography>
          <Select value={currentLanguage} onChange={onChangeLanguage}>
            <Option value="en">  {t('Settings_English')}
            </Option>
            <Option value="fr">{t('Settings_French')}
            </Option>
          </Select>
        </Box>
      </Box>
    </div>
  );
};

export default View;
