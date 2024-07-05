import { useFavorites } from "../../context/Dismissal";
import { AiOutlineUserAdd } from "react-icons/ai";
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

const DismissalUsers = () => {
    const { dismissal, dispatch } = useFavorites();
    const handleRestore = (user) => {
        dispatch({ type: 'REMOVE_FROM_DISMISSAL', payload: user });
    }

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
                                    width: "200px",
                                    textAlign: "center",
                                }}
                            >
                                Qayta ishga olish
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dismissal.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    Ishdan bo'shatilganlar mavjud emas !!!
                                </TableCell>
                            </TableRow>
                        ) : (
                            dismissal.map((user) => (
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
                                    <TableCell onClick={() => handleRestore(user)}>
                                        <AiOutlineUserAdd className="text-[green] cursor-pointer text-2xl w-full" />
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

export default DismissalUsers;
