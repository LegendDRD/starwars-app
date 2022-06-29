import { Title, Background } from '../theme/HomeStyle'
import PeopleGallery from '../components/ImageGallery/PeopleGallery'
import NavBar from '../components/NavBar'

export default function Home() {

    return (
        <>
            <NavBar />
            <Background />
            <Title>SovTech Assignment</Title>
            <PeopleGallery />
        </>
    );
}
