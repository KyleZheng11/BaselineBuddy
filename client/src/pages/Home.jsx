import { Toolbar } from 'primereact/toolbar'
import './Home.css'

function Home() {
    const toolbarContent = (
        <li>
            <ul>
                <button>CourtFinder</button>
            </ul>
        </li>
    )
     
    

    return (
        <div class="homepage">
            <h1>BaselineBuddy</h1>
            <div class="taskbar">
                <Toolbar start={toolbarContent}/>
            </div>
        </div>
    )
}

export default Home