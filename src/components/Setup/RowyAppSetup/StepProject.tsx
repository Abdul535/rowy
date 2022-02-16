import { ISetupStep, ISetupStepBodyProps } from "../types";

import {
  useMediaQuery,
  Typography,
  Stack,
  TextField,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import InlineOpenInNewIcon from "@src/components/InlineOpenInNewIcon";

import SetupItem from "../SetupItem";

export default {
  id: "project",
  shortTitle: "Project",
  title: "Select project",
  body: StepProject,
} as ISetupStep;

function StepProject({ isComplete, setComplete }: ISetupStepBodyProps) {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <>
      <Typography variant="inherit">
        Select which Firebase project to set up Rowy on.
      </Typography>

      <SetupItem
        title="Select an existing project or create a new one."
        status="incomplete"
      >
        <Stack
          spacing={2}
          direction={isMobile ? "column" : "row"}
          justifyContent="flex-start"
          alignItems="center"
        >
          <TextField
            label="Project"
            select
            fullWidth
            style={isMobile ? undefined : { minWidth: 300 }}
            helperText={isMobile ? undefined : " "}
            SelectProps={{
              displayEmpty: true,
              renderValue: (v: any) =>
                v || (
                  <Typography color="text.disabled">
                    Select a project…
                  </Typography>
                ),
            }}
          >
            <MenuItem value="lorem">lorem</MenuItem>
            <MenuItem value="ipsum">ipsum</MenuItem>
            <MenuItem value="dolor">dolor</MenuItem>
            <MenuItem value="sit">sit</MenuItem>
            <MenuItem value="amet">amet</MenuItem>
          </TextField>

          <Divider orientation={isMobile ? "horizontal" : "vertical"} flexItem>
            OR
          </Divider>

          <Button
            onClick={() => setComplete()}
            style={isMobile ? undefined : { minWidth: 300 }}
          >
            Create project in Firebase Console
            <InlineOpenInNewIcon />
          </Button>
        </Stack>
      </SetupItem>
    </>
  );
}
