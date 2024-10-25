import HomePage from './[...filename]/page';


export const getStaticProps = async () => {
  return { params: { filename: 'home' } };
}

export default HomePage;
