import { useEffect,  useState } from "react";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {  FaTrash, FaUserEdit } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic();

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosPublic.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [axiosPublic]);

  // Delete user
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/users/${id}`);
          setUsers(users.filter((user) => user._id !== id));
          Swal.fire("Deleted!", "User has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire("Error", "Failed to delete user", "error");
        }
      }
    });
  };

  // update user 
  const handleEdit = (user) => {
    Swal.fire({
      title: "Edit User",
      html: `<input type="text" id="role" class="swal2-input" placeholder="Role" value="${user.role}" />`,
      confirmButtonText: "Save",
      showCancelButton: true,
      preConfirm: () => {
        const role = Swal.getPopup().querySelector("#role").value;
        if (!role) {
          Swal.showValidationMessage("Role is required");
        }
        return { role };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.put(`/users/${user._id}`, { role: result.value.role });
          setUsers((prev) =>
            prev.map((u) => (u._id === user._id ? { ...u, role: result.value.role } : u))
          );
          Swal.fire("Updated!", "User role has been updated.", "success");
        } catch (error) {
          console.error("Error updating user:", error);
          Swal.fire("Error", "Failed to update user", "error");
        }
      }
    });
  };
  


  const columns = [
    {
      id: "index",
      header: "No",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex justify-evenly text-lg">
          
          <button
            onClick={() => handleEdit(row.original)}
            className="text-blue-500 hover:text-blue-700 border border-blue-500 px-2 py-1 rounded"
          >
            <FaUserEdit />
          </button>
          
          <button
            onClick={() => handleDelete(row.original._id)}
            className="text-red-500 hover:text-red-700 border border-red-500 px-2 py-1 rounded"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard | All Users</title>
      </Helmet>
      <div className="flex justify-center items-center ">
        <div className="w-full max-w-6xl p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl lg:text-4xl font-bold text-black text-start mb-4">
            All Users <span className="text-yellow-500 ml-1 text-3xl  border-2 border-yellow-500 hidden lg:inline rounded px-2">{users.length}</span>
          </h1>
          <table className="min-w-full border border-gray-300">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-gray-200">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-sm lg:text-base font-bold text-gray-800 border text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={row.index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 border text-center ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
