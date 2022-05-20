import React from 'react'

import { Box ,Skeleton,Stack } from '@mui/material';

function Loader() {
  return (
    <Box  display={'flex'} justifyContent={'center'} alignItems={'start'} flex flexWrap={'wrap'} flexDirection={"row"}>
    <Stack spacing={1} width={"20%"} margin={"10px"}>
<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />
</Stack>  
<Stack spacing={1} width={"20%"} margin={"10px"}>
<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />
</Stack>   
<Stack spacing={1} width={"20%"} margin={"10px"}>
<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />
</Stack>

  </Box>
  )
}

export default Loader
