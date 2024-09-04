'use client'
import { Button, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemContent, Modal, ModalDialog, Typography } from '@mui/joy';
import styles from './styles.module.scss';
import ModalClose from '@mui/joy/ModalClose';
import { useTranslation } from '@/hooks/useTranslation';

type Props = {
  isConfirmCguOpen: boolean;
  isCguChecked: boolean;
  onConfirmCgu: VoidFunction;
  onCloseModelCgu: VoidFunction;
}

const View: React.FC<Props> = ({
  isConfirmCguOpen,
  isCguChecked,
  onConfirmCgu,
  onCloseModelCgu
}) => {
  const { t } = useTranslation()

  return (
    <div className={styles.acceptcgu}>
      <Modal open={isConfirmCguOpen}
        onClose={onConfirmCgu}>
        <ModalDialog variant="outlined" role="alertdialog" maxWidth="lg" sx={{ width: '100%' }}>
          <ModalClose sx={{ marginRight: 1 }} onClick={onCloseModelCgu} />
          <DialogTitle>
            {t('Welcome_Accept_Cgu_Title')}
          </DialogTitle>
          <Divider />
          <DialogContent >

            <Typography level="body-md" >
              {t('Welcome_Accept_Cgu_Text1')}
              <a href={process.env.NEXT_PUBLIC_WEB_SITE} style={{ marginLeft: 3, marginRight: 2 }}>
              https://transfer.lagertha.tech
              </a>
              {t('Welcome_Accept_Cgu_Text2')}
              <List >
                <ListItem> {t('Welcome_Accept_Cgu_Text3')}</ListItem>
                <ListItem>{t('Welcome_Accept_Cgu_Text4')}</ListItem>
                <ListItem>{t('Welcome_Accept_Cgu_Text5')}</ListItem>
              </List>
              {t('Welcome_Accept_Cgu_Text6')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: 2 }}> {t('Welcome_Accept_Cgu_Text7')}</Typography>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 2, marginTop: 2 }}>{t('Welcome_Accept_Cgu_Text8')}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>
              {t('Welcome_Accept_Cgu_Text9')}
            </Typography>
            <List marker={'disc'}>
              <ListItem>  {t('Welcome_Accept_Cgu_Text10')}
              </ListItem>
              <ListItem nested>
                <ListItem>{t('Welcome_Accept_Cgu_Text11')}
                </ListItem>
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text12')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text13')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text14')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text15')}
              </ListItem>
              <ListItem> {t('Welcome_Accept_Cgu_Text16')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text17')}
              </ListItem>
            </List>

            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text18')} </Typography>
            <Typography> {t('Welcome_Accept_Cgu_Text19')} </Typography>
            <List marker={'disc'}>
              <ListItem>  {t('Welcome_Accept_Cgu_Text20')}
              </ListItem>
              <ListItem nested>{t('Welcome_Accept_Cgu_Text21')}
                <ListItem>{t('Welcome_Accept_Cgu_Text22')}
                </ListItem>
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text23')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text24')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text25')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text26')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text27')} </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: 1 }}> {t('Welcome_Accept_Cgu_Text28')} </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text29')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: 1 }}> {t('Welcome_Accept_Cgu_Text30')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: 1 }}> {t('Welcome_Accept_Cgu_Text31')}</Typography>
            <Typography>{t('Welcome_Accept_Cgu_Text32')} </Typography>

            <Typography sx={{ fontWeight: 'bold', marginTop: 1 }}> {t('Welcome_Accept_Cgu_Text33')} </Typography>
            <Typography>{t('Welcome_Accept_Cgu_Text34')} </Typography>
            <Typography sx={{ marginTop: 1 }}>{t('Welcome_Accept_Cgu_Text34_1')}</Typography>
            <Typography sx={{ marginTop: 1 }}>
              {t('Welcome_Accept_Cgu_Text35')}</Typography>
            <Typography sx={{ fontWeight: 'bold', marginTop: 1 }}> {t('Welcome_Accept_Cgu_Text36')} </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text37')}
            </Typography>
            <Typography sx={{marginTop: 1 }} >{t('Welcome_Accept_Cgu_Text37_1')}</Typography>
            <Typography sx={{marginTop: 1 }}>{t('Welcome_Accept_Cgu_Text37_2')}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>{t('Welcome_Accept_Cgu_Text38')} </Typography>

            <Typography> {t('Welcome_Accept_Cgu_Text39')}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text40')} </Typography>
            <Typography sx={{marginBottom: 1 }}>{t('Welcome_Accept_Cgu_Text41')}
            </Typography>
           
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text42')} </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text43')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text44')}   </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text45')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', }}> {t('Welcome_Accept_Cgu_Text46')} </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}> {t('Welcome_Accept_Cgu_Text47')}</Typography>
            <Typography> {t('Welcome_Accept_Cgu_Text48')}</Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}> {t('Welcome_Accept_Cgu_Text49')}   </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text50')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>{t('Welcome_Accept_Cgu_Text51')} </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text52')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>  {t('Welcome_Accept_Cgu_Text53')}
            </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text54')}
            </Typography>
            <List marker='disc'>
              <ListItem>
              <ListItemContent>
              {t('Welcome_Accept_Cgu_Text54_1')}
              </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent>
              {t('Welcome_Accept_Cgu_Text54_2')}
              </ListItemContent>
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}> {t('Welcome_Accept_Cgu_Text55')}  </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text56')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text57')}  </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>   {t('Welcome_Accept_Cgu_Text58')} </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text59')}

            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text60')}    </Typography>
            <Typography>{t('Welcome_Accept_Cgu_Text61')}</Typography>
            <List marker={'disc'}>
              <ListItem>{t('Welcome_Accept_Cgu_Text62')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text63')} </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text64')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text65')} </ListItem>

              <ListItem>{t('Welcome_Accept_Cgu_Text66')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text67')} </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text68')} </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text69')}</ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text70')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text71')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text72')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text73')} </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text74')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text75')}    </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text76')}
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>  {t('Welcome_Accept_Cgu_Text77')}  </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>   {t('Welcome_Accept_Cgu_Text78')}  </Typography>
            <Typography>

              {t('Welcome_Accept_Cgu_Text79')}
            </Typography>
            <List marker={'disc'}>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text80')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text81')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text82')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text83')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}>
              {t('Welcome_Accept_Cgu_Text84')}
            </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text85')}

            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>   {t('Welcome_Accept_Cgu_Text86')}
            </Typography>
            <Typography>

              {t('Welcome_Accept_Cgu_Text87')}
            </Typography>
            <List marker={'disc'}>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text88')}
              </ListItem>
              <ListItem>    {t('Welcome_Accept_Cgu_Text89')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text90')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text91')}   </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>  {t('Welcome_Accept_Cgu_Text92')}   </Typography>
            <Typography>
              {t('Welcome_Accept_Cgu_Text93')}
            </Typography>
            <List marker={'disc'}>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text94')}
              </ListItem>
              <ListItem> {t('Welcome_Accept_Cgu_Text95')}</ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text96')}
              </ListItem>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text97')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}>
              {t('Welcome_Accept_Cgu_Text98')}
            </Typography>
            <List marker={'disc'}>
              <ListItem>
                {t('Welcome_Accept_Cgu_Text99')}
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text100')} </ListItem>

              <ListItem>{t('Welcome_Accept_Cgu_Text101')}  </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}>{t('Welcome_Accept_Cgu_Text102')} </Typography>
            <List marker={'disc'}>
              <ListItem>{t('Welcome_Accept_Cgu_Text103')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text104')}</Typography>
            <List marker={'disc'}>
              <ListItem>{t('Welcome_Accept_Cgu_Text105')} </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text106')}
              </ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text107')} </Typography>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text108')} </Typography>
            <List marker={'disc'}>
              <ListItem>{t('Welcome_Accept_Cgu_Text109')}</ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text110')}  </Typography>
            <List marker={'disc'}>
              <ListItem>{t('Welcome_Accept_Cgu_Text111')}</ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text112')} </Typography>
            <List marker={'disc'}>
              <ListItem> {t('Welcome_Accept_Cgu_Text113')} </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text114')}</ListItem>
              <ListItem> {t('Welcome_Accept_Cgu_Text115')}</ListItem>
            </List>
            <Typography sx={{ fontWeight: 'bold' }}> {t('Welcome_Accept_Cgu_Text116')} </Typography>
            <List marker={'disc'}>
              <ListItem> {t('Welcome_Accept_Cgu_Text117')}</ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text118')}</ListItem>
              <ListItem> {t('Welcome_Accept_Cgu_Text119')}
                <List marker='none'>
                  <ListItem>  {t('Welcome_Accept_Cgu_Text120')}</ListItem>
                  <ListItem>
                    {t('Welcome_Accept_Cgu_Text121')} </ListItem>
                  <ListItem>
                    {t('Welcome_Accept_Cgu_Text122')}</ListItem>
                </List>
              </ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text123')}</ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text124')}</ListItem>
              <ListItem> {t('Welcome_Accept_Cgu_Text125')}</ListItem>
              <ListItem>{t('Welcome_Accept_Cgu_Text126')}
              </ListItem>
              <List marker='none'>
                <ListItem> {t('Welcome_Accept_Cgu_Text127')}</ListItem>
                <ListItem>
                  {t('Welcome_Accept_Cgu_Text128')}</ListItem>
              </List>
            </List>
          </DialogContent>
          <DialogActions >
            <Button variant="solid" color="primary" onClick={onConfirmCgu} >
              {t('Welcome_Accept_Cgu_Text129')}
            </Button>
            <Button variant="plain" color="primary" onClick={onCloseModelCgu}>
              {t('Welcome_Accept_Cgu_Text130')}
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </div >
  );
};

export default View;