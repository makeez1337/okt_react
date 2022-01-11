import './App.css';
import Users from './components/Users/Users'
import Posts from './components/Posts/Posts'
import Comments from './components/Comments/Comments'

function App() {


    return (

        <div id={'main_page'}>

            <div className={'users_and_posts_wrap'}>
                <Users/>
                <Posts/>
            </div>

            <Comments/>

        </div>

    )
}

export default App;
