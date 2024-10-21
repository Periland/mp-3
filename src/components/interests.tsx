import CommonWrapper from "./commonwrapper";
import ferrari from "../media/ferrari.png";
import karting from "../media/karting.jpg";
import simracing from "../media/simracing.png";

export default function Interests() {
    return (
        <>
            <CommonWrapper>
                <title>Activities and Interests | JMA Resume</title>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Activity</th>
                            <th>Description</th>
                            <th>Link(s)</th>
                        </tr>
                        <tr>
                            <td><img src={ferrari} width="300" height="300"/></td>
                            <td><h3>Formula 1</h3></td>
                            <td><p>I have been a fan of Formula 1 since around 2019 and ever since I began following the racing series, I haven't missed a single grand prix.</p></td>
                            <td><a href="http://www.f1.com" target="_blank">Formula 1</a></td>
                        </tr>
                        <tr>
                            <td><img src={karting} width="300" height="242"/></td>
                            <td><h3>Rental Karting</h3></td>
                            <td><p>Aside from watching the Formula 1 races, I also really enjoy going karting with my friends back in Madrid. The image to the left is of one of my favourite tracks at Karting Club Los Santos</p></td>
                            <td><a href="https://www.kartingclublossantos.com/" target="_blank">Karting Club Los Santos</a></td>
                        </tr>
                        <tr>
                            <td><img src={simracing} width="300" height="169"/></td>
                            <td><h3>Sim Racing</h3></td>
                            <td><p>While I try to go karting whenever I can, unfortunately there are barely any karting tracks near Boston, and no outdoor tracks. As a result of this, I put my first paycheck towards a racing simulator, nowhere near as nice as this one tho, and I love it. Today's technology provides software in which cars behave virtually the same as in real life. So much so that the best racers in the world also sim race professoionally in between their races like Max Verstappen, 3 time Formula 1 World Champion.</p></td>
                            <td>
                                <a href="https://www.motorsport.com/f1/news/how-verstappen-plans-to-fit-nurburgring-24-sim-race-into-imola-f1-weekend/10611784/" target="_blank">Verstappen Sim Racing during Imola GP</a>
                                <div>
                                    <a href="https://www.iracing.com/" target="_blank">iRacing</a>
                                </div>   
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CommonWrapper>
        </>
    );
}