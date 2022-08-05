export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// temp data

export const userRows = [
  {
    id: 1,
    username: "Snow",
    status: "active",
    img: "https://picsum.photos/400",
    email: "snow@gthrones.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lanister",
    status: "passive",
    img: "https://picsum.photos/400",
    email: "jl@gthrones.com",
    age: 52,
  },
  {
    id: 3,
    username: "Lanister",
    status: "pending",
    img: "https://picsum.photos/400",
    email: "lani@gthrones.com",
    age: 25,
  },
];
