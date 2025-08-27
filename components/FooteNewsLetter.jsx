import React from "react";

import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const FooteNewsLetter = () => {
  return (
    <div>
      <div className="mb-10">
        <p className="uppercase text-white md:text-[25px] text-[15px] leading-[37.5px] ">
          Newsletter
        </p>
        <p className="md:text-[16px] text-[13px] md:mt-5 leading-[24px] text-white">
          Subscribe our newsletter to get our latest <br /> update & news
        </p>
      </div>

      <form>
        <FormControl variant="outlined" size="small">
          <OutlinedInput
            type="email"
            placeholder="Enter your email"
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" edge="end" sx={{ color: "#74B117" }}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              width: "250px", // control width of input
              background: "#fff",
            }}
            inputProps={{
              "aria-label": "email",
            }}
          />
        </FormControl>
      </form>
    </div>
  );
};

export default FooteNewsLetter;
