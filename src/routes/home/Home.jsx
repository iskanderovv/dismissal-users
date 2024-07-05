import { AiOutlineUserDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Container from "../../container/Container";
import { useFavorites } from "../../context/Dismissal";

const Home = () => {
  const [url, setUrl] = useState("/users?page=1");
  const { data: users } = useFetch(url);
  const { dismissal, dispatch } = useFavorites();
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users) {
      setFilteredUsers(
        users.filter(
          (user) => !dismissal.some((dismissed) => dismissed.id === user.id)
        )
      );
    }
  }, [users, dismissal]);

  const handleDismissal = (user) => {
    dispatch({ type: "ADD_TO_DISMISSAL", payload: user });
  };

  return (
    <Container>
      <TableContainer component={Paper} className="my-10">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="bg-[#f9fafc]">
              <TableCell className="font-semibold">ID</TableCell>
              <TableCell className="font-semibold">Surat</TableCell>
              <TableCell className="font-semibold">Ism</TableCell>
              <TableCell className="font-semibold">Familiya</TableCell>
              <TableCell className="font-semibold">Email</TableCell>
              <TableCell
                className="font-semibold"
                sx={{
                  width: "100px",
                  textAlign: "center",
                }}
              >
                Ishdan bo'shatish
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Ishchilar mavjud emas !!!
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow
                  className="hover:bg-[#cdebce]"
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <img
                      src={user.avatar}
                      alt={`${user.name}'s avatar`}
                      width={50}
                      height={50}
                    />
                  </TableCell>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.last_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell onClick={() => handleDismissal(user)}>
                    <AiOutlineUserDelete className="text-[crimson] cursor-pointer text-2xl w-full" />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
