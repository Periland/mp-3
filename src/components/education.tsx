import CommonWrapper from "./commonwrapper";
import bu from "../media/bu.png";
import runny from "../media/runny.png";

export default function Education() {
    return (
        <>
            <CommonWrapper>
                <title>Education | JMA Resume</title>
                <h2><strong>Education</strong></h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>School/College</th>
                            <th>Description</th>
                            <th>Link(s)</th>
                        </tr>

                        <tr>
                            <td><img src ={bu} width="300"/></td>
                            <td><h1>Boston University</h1></td>
                            <td>
                                <ul>
                                    <li>Current Level: Junior</li>
                                    <br/>
                                    <li>Relevant Classes: Data Structures & Algorithms, Combinatoric Structures & Discrete Math, Linear
                                        Algebra & Geometric Algorithms, Computer Systems & Systems Programming, Probability in
                                        Computing, Algorithm Analysis, Concepts of Programming Languages (Ocaml).</li>
                                    <br/>
                                    <li>GPA: 3.70</li>
                                </ul>
                            </td>
                            <td>
                                <a href="http://bu.edu" target="_blank">Boston University</a>
                            </td>
                        </tr>

                        <tr>
                            <td><img src ={runny} width="300" height="300"/></td>
                            <td><h1>Runnymede College</h1></td>
                            <td>
                                <ul>
                                    <li>Attended this school in madrid ever since I was 5 aside from 3 years that I spent studying in the United Kingdom</li>
                                    <br/>
                                    <li>A-Levels: Mathematics, History and Physics</li>
                                </ul>
                            </td>
                            <td>
                                <a href="https://runnymede-college.com/" target="_blank">Runnymede College</a>
                            </td>
                        </tr>        
                    </tbody>
                </table>
            </CommonWrapper>
        </>
    );
}