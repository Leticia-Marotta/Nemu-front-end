import React, { useEffect, useState } from "react";
import { IJourney } from "../apis/journey-interface";
import journeysApi from "../apis/journeys-api";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Card, Typography } from "@mui/material";
import { convertHeaderTableName } from "../utils/utils";
import LoadingModal from "../commons/LoadingModal";

const HomePage = () => {
  const [journeys, setJouneys] = useState<IJourney[]>([]);
  const [columnsTable, setColumnsTable] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await journeysApi.getAllJourneys();
        if (data) {
          setJouneys(data as IJourney[]);
          setColumnsTable(Object.keys(data[0]));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const columns: GridColDef[] = columnsTable.map((item) => {
    return { field: item, headerName: convertHeaderTableName(item), flex: 1 };
  });

  return (
    <Box sx={style.page}>
      <Typography variant="h3">Nemu Test - Letícia</Typography>
      <Card sx={style.card}>
        <Typography>{journeys.length} jornadas encontradas</Typography>
      </Card>
      <DataGrid
        rows={journeys}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 15]}
        sx={style.table}
      />
      <LoadingModal isOpen={isLoading} onClose={() => setIsLoading(false)} />
    </Box>
  );
};

const style = {
  page: {
    display: "flex",
    flexDirection: "column",
    padding: 3,
    gap: 2,
  },
  card: {
    padding: 2,
    elevation: 5,
    borderRadius: 8,
    width: "fit-content",
  },
  table: {
    borderRadius: 2,
  },
};

export default HomePage;
