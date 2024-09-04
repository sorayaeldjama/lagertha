"use client";
import { Key } from "@mui/icons-material";
import {
  Card,
  Typography,
  Stack,
  Input,
  IconButton,
  LinearProgress,
  Checkbox,
} from "@mui/joy";
import styles from "./styles.module.scss";
import { Dispatch, SetStateAction } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AlertsErrorPassword from "./AlertsErrorPassword";

type Props = {
  onChangeNoPassword: (e: React.BaseSyntheticEvent) => void;
  onChangeConfirmPassword: (e: React.BaseSyntheticEvent) => void;
  onChangePassword: (e: React.BaseSyntheticEvent) => void;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  password: string;
  showPassword: boolean;
  noPassword: boolean;
  errorPassword: boolean;
  confirmPassword: string;
};
const View: React.FC<Props> = ({
  onChangeNoPassword,
  onChangeConfirmPassword,
  onChangePassword,
  setShowPassword,
  password,
  showPassword,
  noPassword,
  errorPassword,
  confirmPassword,
}) => {
  return (
    <>
      <div className={styles.linkpassword}>
        <AlertsErrorPassword />
        {/* <Checkbox
          label="Generate a strong and random password"
          checked={noPassword}
          size="sm"
          onChange={onChangeNoPassword}
        /> */}
        {!noPassword && (
          <Card
            sx={{
              marginBottom: 2,
            }}
          >
            <Typography level="title-md">Password</Typography>
            <Typography level="body-sm">
              Choose a strong password to protect your link
            </Typography>
            <Stack
              spacing={0.5}
              sx={{
                "--hue": Math.min(password.length * 10, 120),
              }}
            >
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Type in here…"
                startDecorator={<Key />}
                value={password}
                onChange={onChangePassword}
                disabled={noPassword}
                error={errorPassword}
                endDecorator={
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    <RemoveRedEyeIcon />
                  </IconButton>
                }
              />
              <LinearProgress
                determinate
                size="sm"
                value={Math.min(
                  Math.min((password.length * 100) / 8) *
                    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)
                      ? 1
                      : 0),
                  100
                )}
                sx={{
                  bgcolor: "background.level3",
                  color: "hsl(var(--hue) 80% 40%)",
                }}
              />
              <Typography
                level="body-xs"
                sx={{
                  alignSelf: "flex-end",
                  color: "hsl(var(--hue) 80% 30%)",
                }}
              >
                {password.length < 3 && "Very weak"}
                {(password.length >= 3 && password.length < 6) ||
                  (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password) &&
                    "Weak")}
                {password.length >= 6 &&
                  password.length < 10 &&
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password) &&
                  "Strong"}
                {password.length >= 10 &&
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password) &&
                  "Very strong"}
              </Typography>
            </Stack>
            <Stack
              spacing={0.5}
              sx={{
                "--hue": Math.min(password.length * 10, 120),
              }}
            >
              <Input
                size="md"
                name="password"
                placeholder="confirm ..."
                type="password"
                className={styles.textfield}
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
                error={password !== confirmPassword}
                disabled={noPassword}
              />
              <LinearProgress
                determinate
                size="sm"
                value={password === confirmPassword ? 100 : 0}
                sx={{
                  bgcolor: "background.level3",
                  color: "hsl(var(--hue) 80% 40%)",
                }}
              />
            </Stack>
          </Card>
        )}

        
      </div>
    </>
  );
};
export default View;
