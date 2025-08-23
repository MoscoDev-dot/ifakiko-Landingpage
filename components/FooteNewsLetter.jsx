import React from "react";
import SendIcon from "@mui/icons-material/Send";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const FooteNewsLetter = () => {
  return (
    <div>
      <div>
        <p className="uppercase text-white text-[25px] leading-[37.5px] ">
          Newsletter
        </p>
        <p className="text-[16px] md:mt-5 leading-[24px] text-white">
          Subscribe our newsletter to get our latest <br /> update & news
        </p>
      </div>
      <FormControl sx={{  width: '30ch', background: '#fff' }} variant="outlined">
        <OutlinedInput
          type="email"
          placeholder="Enter your email"
          sx={{background:'#74B117',}}
          endAdornment={
            <InputAdornment sx={{ color: '#FFFFFF'}} position="end">
              <button type="submit"><SendIcon  /></button>
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'email',
            style: { background: '#fff' }
          }}
        />
      </FormControl>
    </div>
  );
};

export default FooteNewsLetter;