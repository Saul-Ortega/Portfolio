import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Training from '../components/Training';
import Courses from '../components/Courses';
import FloatingButton from '../components/FloatingButton';

function Home() {
    return (
        <>
            <Header />
                <Main />
                <Experience />
                <Skills />
                <Training />
                <Courses />
                <FloatingButton />
            <Footer />
        </>
    )
}

export default Home