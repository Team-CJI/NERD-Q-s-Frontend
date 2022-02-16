// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// NERDQ React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// NERDQ React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
import React from "react";
import FormUpdateModal from "./data/form/UpdateModal";

// class Tables extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       score: 0,
//     };
//   }
// }

function Tables() {
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Leaderboard
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                <FormUpdateModal />
              </MDBox>
              <Card>
                <FormUpdateModal />
              </Card>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
