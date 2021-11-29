import React, { useContext, useEffect, useState, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AuthContext } from "../contexts/AuthContext";
import { MemorialContext } from "../contexts/MemorialContext";

import toastSweet from "../utils/toastSweet";

const MemorialsManagements = () => {
  const {
    authState: {
      user: {  role, id },
    },
  } = useContext(AuthContext);
  const [selectionModel, setSelectionModel] = useState([]);
  const {
    memorialState: { memorials },
    addMemorial,
    getMemorials,
    getMemorialsByUser,
    deleteMemorials,
    updateMemorial
  } = useContext(MemorialContext);
  const [editRows, setEditRows] = useState({});
  const handleUpdateMemorial = () => {
    updateMemorial(editRows);
  }
  const handleDeleteMemorials = () => {
    if (editRows.length === 0) {
      toastSweet("error", "Please select a memorial to delete");
      return;
    } else {
      deleteMemorials(selectionModel);
    }
    
  }

  const handleEditRowsModelChange = useCallback((model) => {
    const temp = {};
    if (model && Object.entries(model).length !== 0) {
      let id = Object.entries(model)[0][0];

      for (let [key, value] of Object.entries(model[id])) {
        temp[key] = value.value;
      }
      temp._id = id;
    }
    setEditRows(temp);
  }, [])

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
                onClick={handleDeleteMemorials}
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
      
      getMemorialsByUser({
        userId: id
      });
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
        editMode="row"
        onEditRowsModelChange={handleEditRowsModelChange}
        onSelectionModelChange={(id) => {
          setSelectionModel(id);
        }}
      />
    </div>
  );
};

export default MemorialsManagements;
