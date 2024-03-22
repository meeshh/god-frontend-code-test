import CarCard from '../components/CarCard';

const HomePage = () => {
    return (
        <div className='flex gap-24'>
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
        </div>
    );
};

export default HomePage;