import { Link } from "react-router-dom"
import Container from "../components/Container"
import TitlePage from "../components/TitlePage"
import { useDispatch, useSelector } from "react-redux"
import UserAction from "../store/actions/userAction"
import { useEffect } from "react"
import Table from "../components/Table"
import UserRow from "../components/table/UserRow"

export default function Users() {
    const dispatch = useDispatch()
    const {users} = useSelector(store => store.user) 

    useEffect(() => {
        dispatch(UserAction.fetchUsers())
    }, [dispatch])
    return (
        <>
            <Container>
                <TitlePage>Users</TitlePage>
            </Container>
            <Container className="flex-[1] flex flex-col">
                <div className="flex gap-2">
                    <Link to='/users/add' className="bg-emerald-400 text-white px-6 py-3 rounded-md">
                        ADD
                    </Link>
                </div>
                {users?.length && (
                    <>
                        <Table
                            tHeads={[
                                "id",
                                "name",
                            ]}
                        >
                            {users.map((user) => (
                                <UserRow key={user.id} user={user} />
                            ))}
                        </Table>
                    </>
                )}
            </Container>
        </>
    )
}
