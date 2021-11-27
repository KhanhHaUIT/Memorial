import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../contexts/AuthContext";
import { MemorialContext } from "../contexts/MemorialContext";



const MemorialsManagements = () => {
  const {
    authState: {
      user: { username, role, _id },
    },
  } = useContext(AuthContext);
  const [selectionModel, setSelectionModel] = useState([]);
  const {
    memorialState: { memorials },
    addMemorial,
    getMemorials,
    getMemorialsByUser,
  } = useContext(MemorialContext);

  const handleUpdateMemorial = () => {
    console.log(selectionModel);
  }
  const handleDeleteMemorial = () => {
    console.log(selectionModel);
  }
  const columns = [
    {
        field: "_id",
        headerName: "ID",
        width: 140,
        editable: true,
      },
      {
        field: "deceasedPersonName",
        headerName: "deceasedPersonName",
        width: 140,
        editable: true,
      },
      {
        field: "senderName",
        headerName: "senderName",
        width: 140,
        editable: true,
      },
      {
        field: "birthYear",
        headerName: "birthYear",
        width: 140,
        editable: true,
      },
      {
        field: "deathYear",
        headerName: "deathYear",
        width: 140,
        editable: true,
      },
      {
        field: "province",
        headerName: "province",
        width: 140,
        editable: true,
      },
      {
        field: "district",
        headerName: "district",
        width: 140,
        editable: true,
      },
      {
        field: "remembranceWords",
        headerName: "remembranceWords",
        width: 140,
        editable: true,
      },
      {
        field: "relationship",
        headerName: "relationship",
        width: 140,
        editable: true,
      },
      {
        field: "phone",
        headerName: "phone",
        width: 140,
        editable: true,
      },
      {
        field: "userId",
        headerName: "userId",
        width: 140,
        editable: true,
      },
      {
        field: "action",
        headerName: "Action",
        width: 200,
        sortable: false,
        renderCell: () => {
          return (
            <>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleUpdateMemorial}
              >
                Update
              </button>
              <button
                type="button"
                className=" mx-2 btn btn-outline-danger"
                onClick={handleDeleteMemorial}
              >
                Delete
              </button>
            </>
          );
        },
      },
  ]

  useEffect(() => {
    if (role !== "admin") {
      getMemorialsByUser(_id);
    } else {
        getMemorials();
    }
  }, []);

  return (
    <div style={{ height: "400", width: "98%", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>
        MEMORIALS MANAGEMENT{" "}
        <button type="button" className=" mx-2 btn btn-outline-primary">
          ADD MEMORIAL
        </button>
      </h1>
      <DataGrid
        rows={memorials}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
        onSelectionModelChange={(id) => {
          setSelectionModel(id);
        }}
      />
    </div>
  );
};

export default MemorialsManagements;
