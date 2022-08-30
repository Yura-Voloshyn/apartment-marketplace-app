import { AppStyled, Container } from './App.styled';
import CreateApartmentForm from '../CreateApartmentForm/CreateApartmentForm';
import CurrentApartmentsRent from 'components/CurrentApartmentsRent/CurrentApartmentsRent';
import AvailableApartments from 'components/AvailableApartments/AvailableApartments';
const App = () => {
  return (
    <AppStyled>
      <Container>
        <CreateApartmentForm />
        <CurrentApartmentsRent />
        <AvailableApartments />
      </Container>
    </AppStyled>
  );
};

export default App;
