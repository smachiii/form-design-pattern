import { FormControl, InputLabel, Input, Stack, Button } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const MuiForm = () => {
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(
      `submit: 
      ${data.firstName}
      ${data.lastName}
      ${data.email}
      ${data.password}`
    );
  };

  const { handleSubmit } = useForm<Inputs>({
    defaultValues: { firstName: "", lastName: "", email: "", password: "" }
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
      <Stack direction="row" spacing={2}>
        <FormControl>
          <InputLabel htmlFor="firstName" variant="standard" shrink>
            名
          </InputLabel>
          <Input id="firstName" name="firstName" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName" variant="standard" shrink>
            姓
          </InputLabel>
          <Input id="lastName" name="lastName" />
        </FormControl>
      </Stack>
      <FormControl>
        <InputLabel htmlFor="email" variant="standard" shrink>
          メールアドレス
        </InputLabel>
        <Input id="email" name="email" sx={{ width: 400 }} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password" variant="standard" shrink>
          パスワード
        </InputLabel>
        <Input
          id="password"
          name="password"
          placeholder="8文字以上である必要があります。"
          sx={{ width: 400 }}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        size="large"
        onClick={handleSubmit(onSubmit)}
        sx={{ width: 200 }}
      >
        登録する
      </Button>
    </Stack>
  );
};
