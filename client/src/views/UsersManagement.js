import React, { useEffect, useContext, useState, useCallback } from "react";
import { UserContext } from "../contexts/UserContext";
import { DataGrid } from "@mui/x-data-grid";
import AddUserModal from "../components/management/AddUserModal";
import toastSweet from "../utils/toastSweet";

const UsersManagement = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [editRows, setEditRows] = useState({});

  const {
    userState: { users },
    getUsers,
    setShowAddUserModal,
    deleteUsers,
    updateUser,
  } = useContext(UserContext);
  const handleUpdateUser = () => {
    updateUser(editRows);
  };
  const handleDeleteUsers = () => {
    if (selectionModel.length === 0) {
      toastSweet("error", "Please select a user to delete");
      return;
    } else {
      deleteUsers(selectionModel);
    }
  };
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
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 140,
    },
    {
      field: "username",
      headerName: "Username",
      width: 140,
      editable: true,
    },
    {
      field: "password",
      headerName: "Password",
      width: 140,
      editable: true,
    },
    {
      field: "role",
      headerName: "Role",
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
              onClick={handleUpdateUser}
            >
              Update
            </button>
            <button
              type="button"
              className=" mx-2 btn btn-outline-danger"
              onClick={handleDeleteUsers}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <AddUserModal />
      <div style={{ height: 600, width: "45%", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>
          USER MANAGEMENT{" "}
          <button
            type="button"
            className=" mx-2 btn btn-outline-primary"
            onClick={setShowAddUserModal.bind(this, true)}
          >
            ADD USER
          </button>
        </h1>

        <DataGrid
          rows={users}
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
    </>
  );
};

export default UsersManagement;
