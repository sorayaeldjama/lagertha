"use client";
import PrivateLayout from "@/components/PrivateLayout";
import styles from "./styles.module.scss";
import { ProductOutput } from "@/services/openapi";
import {
  CssBaseline,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  ModalDialog,
  Sheet,
  Table,
  Typography,
  Button,
  Box,
  Input,
  FormLabel,
  FormControl,
} from "@mui/joy";
import { DateTime } from "luxon";
import DeleteIcon from "@mui/icons-material/Delete";
import { DialogActions, DialogContentText } from "@mui/material";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  products: ProductOutput[];
  deleteOne: (productId: string) => VoidFunction;
  confirmDelete: boolean;
  onCloseConfirm: VoidFunction;
  onConfirmDelete: VoidFunction;
  pressOpenNewForm: VoidFunction;
  openProductForm: boolean;
  onCloseProductForm: VoidFunction;
  newTitle: string;
  newDescription: string;
  newAmount: number;
  newCredits: number;
  onChangeFormTitle: (e: React.BaseSyntheticEvent) => void;
  onChangeFormDescription: (e: React.BaseSyntheticEvent) => void;
  onChangeFormCredits: (e: React.BaseSyntheticEvent) => void;
  onChangeFormAmount: (e: React.BaseSyntheticEvent) => void;
  onSubmitNewProduct: VoidFunction;
};

const View: React.FC<Props> = ({
  products,
  deleteOne,
  confirmDelete,
  onCloseConfirm,
  onConfirmDelete,
  pressOpenNewForm,
  openProductForm,
  onCloseProductForm,
  newTitle,
  newDescription,
  newAmount,
  newCredits,
  onChangeFormTitle,
  onChangeFormDescription,
  onChangeFormCredits,
  onChangeFormAmount,
  onSubmitNewProduct,
}) => {
  const { t } = useTranslation()

  return (
    <PrivateLayout title={t('Finance_Product_Text1')}>
      <Box>
        <Button onClick={pressOpenNewForm}>   {t('Finance_Product_Text1')}</Button>
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "flex" },
          // width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 100, padding: "12px 6px" }}> {t('Finance_Product_Text2')}</th>
              <th style={{ width: 180, padding: "12px 6px" }}> {t('Finance_Product_Text3')}</th>
              <th style={{ width: 100, padding: "12px 6px" }}> {t('Finance_Product_Text4')}</th>
              <th style={{ width: 100, padding: "12px 6px" }}>{t('Finance_Product_Text5')}</th>
              <th style={{ width: 180, padding: "12px 6px" }}>{t('Finance_Product_Text6')}</th>
              <th style={{ width: 60, padding: "12px 6px" }}></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th>
                  <Typography level="body-xs">{product.title}</Typography>
                </th>
                <th>
                  <Typography level="body-xs">{product.description}</Typography>
                </th>
                <th>
                  <Typography level="body-xs">
                    {product.amount / 100}
                  </Typography>
                </th>
                <th>
                  <Typography level="body-xs">{product.currency}</Typography>
                </th>
                <th>
                  <Typography level="body-xs">{product.coins}</Typography>
                </th>
                <th>
                  <IconButton onClick={deleteOne(product.id)}>
                    <DeleteIcon color="inherit" />
                  </IconButton>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Modal open={confirmDelete} onClose={onCloseConfirm}>
        <ModalDialog minWidth="sm">
          <DialogTitle> {t('Finance_Product_Modal_Delete1')}</DialogTitle>
          <DialogContent>
            <DialogContentText>
             {t('Finance_Product_Modal_Delete2')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="plain" onClick={onCloseConfirm}>
               {t('Finance_Product_Modal_Delete3')}
            </Button>
            <Button onClick={onConfirmDelete}>   {t('Finance_Product_Modal_Delete4')}
</Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      <Modal open={openProductForm} onClose={onCloseProductForm}>
        <ModalDialog minWidth="sm">
          <DialogTitle> {t('Finance_Product_Modal_Create1')}</DialogTitle>
          <DialogContent>
            <DialogContentText> {t('Finance_Product_Modal_Create2')}</DialogContentText>
            <FormControl>
              <FormLabel> {t('Finance_Product_Modal_Create3')}</FormLabel>
              <Input
                placeholder={t('Finance_Product_Modal_PlaceHolder1_Title')}
                value={newTitle}
                onChange={onChangeFormTitle}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel> {t('Finance_Product_Modal_Create4')}</FormLabel>
              <Input
                placeholder={t('Finance_Product_Modal_PlaceHolder1')}
                value={newDescription}
                onChange={onChangeFormDescription}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel> {t('Finance_Product_Modal_Create5')}</FormLabel>
              <Input
                placeholder={t('Finance_Product_Modal_PlaceHolder2')}
                type="number"
                value={newCredits}
                onChange={onChangeFormCredits}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t('Finance_Product_Modal_Create6')}</FormLabel>
              <Input
                placeholder={t('Finance_Product_Modal_PlaceHolder3')}
                type="number"
                value={newAmount}
                onChange={onChangeFormAmount}
              ></Input>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button variant="plain" onClick={onCloseProductForm}>
              {t('Finance_Product_Modal_Create7')}
            </Button>
            <Button onClick={onSubmitNewProduct}>{t('Finance_Product_Modal_Create8')}</Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </PrivateLayout>
  );
};

export default View;
