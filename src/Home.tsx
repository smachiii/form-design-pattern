import { Stack, Button } from "@mui/material";

export const Home = () => {
  return (
    <>
      <h1>Form Design</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{ width: 200 }} href="/htmlform">
          HTML / Form
        </Button>
        <Button variant="contained" sx={{ width: 200 }} href="/muiform">
          Mui / Form
        </Button>
      </Stack>
    </>
  );
};
