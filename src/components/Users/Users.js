import User from "../User/User";

const Users = ({users}) => {

    return (
        <div>
            {
                users.map(value => {
                    return <User key={value.id} item={value}/>
                })
            }
        </div>
    );
};

export default Users;