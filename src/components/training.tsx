import CommonWrapper from "./commonwrapper";
import bigml from "../media/bigml.png";
import aepi from "../media/aepi.png";
import columbia from "../media/columbia.png";

export default function Training() {
    return (
        <>
            <CommonWrapper>
                <title>Training | JMA Resume</title>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Organisation</th>
                            <th>Description</th>
                            <th>Link(s)</th>
                        </tr>

                        <tr>
                            <td><img src ={bigml} width="300"/></td>
                            <td><h1>bigML, Inc.</h1></td>
                            <td>
                                <ul>
                                    <li>Data processing for Machine Learning</li>
                                    <br/>
                                    <li>Feature engineering and selection</li>
                                    <br/>
                                    <li>Generating and evaluating Supervised and Unsupervised learning models</li>
                                </ul>
                            </td>
                            <td>
                                <a href="https://bigml.com/" target="_blank">BigML</a>
                            </td>
                        </tr>

                        <tr>
                            <td><img src ={aepi} width="300"/></td>
                            <td><h1>Asocacion Española de Programadores Informaticos (AEPI)</h1></td>
                            <td>
                                <ul>
                                    <li>Completed intensive 100-hour programming course to learn professional Python skills and computer
                                        training.</li>
                                    <br/>
                                    <li>Only high school student who took the course, rest were professionals.</li>
                                    <br/>
                                    <li>Achieved A grade.</li>
                                </ul>
                            </td>
                            <td>
                                <a href="https://www.python.org/" target="_blank">Python</a>
                            </td>
                        </tr>
                        <tr>
                            <td><img src ={columbia} width="300" /></td>
                            <td><h1>Columbia University Summer Program</h1></td>
                            <td>
                                <ul>
                                    <li>Completed intensive 3-week programming course on campus during which I became proficient at
                                        programming in “C”.</li>
                                    <br/>
                                    <li>Achieved A grade.</li>
                                </ul>
                            </td>
                            <td>
                                <a href="https://www.columbia.edu/" target="_blank">Columbia University</a>
                            </td>
                        </tr>         
                    </tbody>
                </table>
            </CommonWrapper>
        </>
    );
}