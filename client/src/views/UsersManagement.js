import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { DataGrid } from "@mui/x-data-grid";
import AddUserModal from "../components/management/AddUserModal";

const UsersManagement = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const {
    userState: { users },
    getUsers,
    setShowAddUserModal,
    deleteUsers
  } = useContext(UserContext);
  const handleUpdateUser = () => {
    console.log(selectionModel);
  };
  const handleDeleteUsers = () => {
    deleteUsers(selectionModel);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 140,
      editable: true,
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
          onSelectionModelChange={(id) => {
            setSelectionModel(id);
          }}
        />
      </div>
    </>
  );
};

export default UsersManagement;
