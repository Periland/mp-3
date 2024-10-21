import cheers from '../media/cheers.png';
import accushoot from '../media/accushoot.png';
import CommonWrapper from './commonwrapper';


export default function Experience() {
    return (
        <>
            <CommonWrapper>
            <title>Experience | JMA Resume</title>
            <h2><strong>Work Experience</strong></h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Image</th>
                                <th>Company</th>
                                <th>Description</th>
                                <th>Link(s)</th>
                            </tr>

                            <tr>
                                <td><img src={cheers} alt="Cheers Logo" width="300"/></td>
                                <td><h1>Cheers Technologies</h1></td>
                                <td>
                                    <ul>
                                        <li>Helped to design the user experience for both consumers and business users</li>
                                        <br/>
                                        <li>Worked on the Business App which was coded in Swift for ipad</li>
                                        <br/>
                                        <li>Developed analytics platform for businesses using BigQuery and Js to transform Firebase data visually in Grafana</li>
                                    </ul>
                                </td>
                                <td>
                                    <a href="http://cheersapp.es" target="_blank">Cheers App</a>
                                </td>
                            </tr>

                            <tr>
                                <td><img src={accushoot} alt="Accushoot Logo" width="300" height="300" /></td>
                                <td><h1>Accushoot</h1></td>
                                <td>
                                    <ul>
                                        <li>Created analytics dashboards to measure the acquisition and evolution of users and subscribers over time using Postgresql and Grafana, influencing critical strategic decisions</li>
                                        <br/>
                                        <li>Developed and collaborated extensively with other members of the team through Git to deploy our projects into production</li>
                                        <br/>
                                        <li>Managed and trained new interns on how to use Grafana, Postgresql and Git to contribute to the project.</li>
                                        <br/>
                                        <li>Lead team meetings outlining the progress of the project and allocating tasks and features for members of the team to implement</li>
                                    </ul>
                                </td>
                                <td>
                                    <a href="http://accushoot.com" target="_blank">Accushoot</a>
                                </td>
                            </tr>        
                        </tbody>
                    </table>
            </CommonWrapper>
        </>
    )
}