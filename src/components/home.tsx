import me from '../media/me.png'
import CommonWrapper from './commonwrapper'

export default function Home() {
    return (
        <>
            <CommonWrapper>
                <title>Home | JMA Resume</title>
                <h2>Home</h2>
                <img src={me} alt="Jose Maria Amusategui Garcia Peri" />
                <br />
                <br />
                <p>My name is Jose Maria Amusategui Garcia Peri and I am a senior majoring in Computer Science at Boston University with a minor in Business Administration. I am originally from Madrid, Spain and I have been living in the United States for the past 4 years. I am very interested in technology a whole and I hope to be able to use my skills to help develop impactful software.</p>
            </CommonWrapper>
        </>
    )
}