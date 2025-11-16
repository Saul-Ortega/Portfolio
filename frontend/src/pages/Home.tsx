import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Training from '../components/Training';
import Courses from '../components/Courses';

function Home() {
    return (
        <>
            <Header />
                <Main />
                <Experience />
                <Skills />
                <Training />
                <Courses />
            <Footer />
        </>
    )
}

export default Home