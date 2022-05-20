import { createApi } from "unsplash-js";
import {useState,useEffect,Fragment} from 'react';
import { Container,CssBaseline,Box,Pagination  } from '@mui/material';


import SearchAppBar from "./Component/Navbar";

import CustomizedCard from './Component/Card'
import Loader from "./Component/Loader/Loader";





function App() {

  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading]=useState(true);
  const [pageNumber,setPageNumber]=useState(0);
  const [searchValue,setSearchValue]=useState("");

  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "0DKkBorvWByYTUehzvq8Nm30JBAz62Nhix3xuQ2l5ww"
  
  });

  const handlePageChange =(e,pageNum)=>{
    setPageNumber(pageNum)

  }
  useEffect(() => {
    api.search
      .getPhotos({ query: searchValue ||"random" ,perPage:20, orientation: "landscape",page:pageNumber })
      .then(result => {
        setPhotosResponse(result);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false);

      });

      window.scroll(0,0)
  }, [pageNumber,searchValue]);
  return (
    <Fragment>
      <CssBaseline  />
      <Container sx={{background:'#193357'}} maxWidth="xl">
        <Box sx={{ minHeight: '100vh' ,paddingBottom:5}} >
        <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />

        {loading? <Loader/>
            :<Box  display={'flex'} justifyContent={'center'} alignItems={'start'} flex flexWrap={'wrap'} flexDirection={"row"}>
            {
            data.response.results.map(item=><CustomizedCard key={item.id}  {...item}/>)
          }
          </Box>}
          <Box  display={'flex'} justifyContent={'center'} alignItems={'start'} flex flexWrap={'wrap'} flexDirection={"row"} marginTop={10} >
          {!loading && <Pagination count={data.response?.total_pages} color="primary" onChange={handlePageChange}/>}
          </Box>
          </Box>
        
      </Container>
    </Fragment>

  );
}

export default App;