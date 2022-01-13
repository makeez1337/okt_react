import './User.css'


const User = (props) => {

    const {item: {id,name, username, email},getUserId} = props;


    return (
        <div>
            <div className={'user_wrap'}>
                <h3>{name}</h3>
                <p>{username} - {email}</p>
                <button onClick={() => {
                    getUserId(id)
                }}>get details
                </button>
            </div>
        </div>
    );
};


export default User;