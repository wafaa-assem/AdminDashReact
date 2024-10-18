export const rows = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-4545",
    address: "0912 Won Street, Aabama, SY 10017",
    city: "New York",
    zipCode: "10001",
    registerId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lamester",
    email: "cerseilamester@gmail.com",
    age: 42,
    phone: "(421)231-2020",
    address: "123 Main Street, New York, NY 10017",
    city: "New York",
    zipCode: "13151",
    registerId: 123512,
  },
  {
    id: 3,
    name: "Jaime Snow",
    email: "jaimelamester@gmail.com",
    age: 45,
    phone: "(621)120-8486",
    address: "123 Won Street, Aabama, SY 1001",
    city: "New York",
    zipCode: "87281",
    registerId: 123512,
  },
  {
    id: 4,
    name: "Anya Strak",
    email: "anyastrak@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, NewYork, NY 22298",
    city: "New York",
    zipCode: "15551",
    registerId: 123512,
  },
  {
    id: 5,
    name: "Daeneyrs Targary",
    email: "daeneyrstargary@gmail.com",
    age: 40,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 213211",
    city: "Tenting",
    zipCode: "14215",
    registerId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 19,
    phone: "(922)478-6363",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registerId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Cliford",
    email: "ferraracliford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 51523",
    city: "Evertin",
    zipCode: "51523",
    registerId: 123512,
  },
  {
    id: 8,
    name: "Rosiini Frances",
    email: "rosiinifrances@gmail.com",
    age: 36,
    phone: "(222)444-555",
    address: "4123 Ever Blvd, Wentington, AD 44215",
    city: "Esteras",
    zipCode: "44215",
    registerId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 111234",
    city: "Colunza",
    zipCode: "111234",
    registerId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredac@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 14222",
    city: "Esteras",
    zipCode: "44215",
    registerId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodman@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFor,. Nd 1001",
    city: "Colunza",
    zipCode: "1234",
    registerId: 92197,
  },
];

export const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 33,
  },
  {
    field: "registerId",
    headerName: "Register ID",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "age",
    width: 40,
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
  },
];
