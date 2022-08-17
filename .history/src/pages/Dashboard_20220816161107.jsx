import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function BackgroundColor() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}
        >
          <Link
            to="reset-password"
            className="text-sm font-medium text-blue-600 hover:bg-yellow-400"
          >
            Students Operations
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            p: 2,
          }}
        >
          secondary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: "error.main", color: "error.contrastText", p: 2 }}>
          error.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{ bgcolor: "warning.main", color: "warning.contrastText", p: 2 }}
        >
          warning.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: "info.main", color: "info.contrastText", p: 2 }}>
          info.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{ bgcolor: "success.main", color: "success.contrastText", p: 2 }}
        >
          success.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: "text.primary", color: "background.paper", p: 2 }}>
          text.primary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{ bgcolor: "text.secondary", color: "background.paper", p: 2 }}
        >
          text.secondary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box sx={{ bgcolor: "text.disabled", color: "background.paper", p: 2 }}>
          text.disabled
        </Box>
      </Grid>
    </Grid>
  );
}

// import React from 'react'
// import Footer from '../partials/Footer';
// import UserHeader from '../partials/UserHeader';
// import Student from '../School/Student';
// export default function Dashboard() {
//   return (
//     <div className="flex flex-col min-h-screen overflow-hidden">
//       <UserHeader />
//       <main className="flex-grow">
//         <Student/>
//       </main>
//       <Footer />
//     </div>
//   );
// }
