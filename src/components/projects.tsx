import CommonWrapper from './commonwrapper';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <>
            <CommonWrapper>
                <title>Projects | JMA Resume</title>
                <h1>Projects</h1>
                <p>Below are links to some of the projects that I have worked on</p>
                <ul>
                    <br/>
                    <li><a href="https://cheersapp.es" target="_blank">Cheers App</a></li>
                    <br/>
                    <li><a href="https://cs-people.bu.edu/jmamus/survey/survey.html" target="_blank">Survey</a></li>
                    <br/>
                    <li><Link to="/calculator">Spanish Calculator</Link></li>
                    <br/>
                </ul>
            </CommonWrapper>
        </>
    )
}