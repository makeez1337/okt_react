import User from "../User/User";

const Users = ({users}) => {

    return (
        <div>
            {
                users.map(value => <User user={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;