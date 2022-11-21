import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';

import { Orders } from './components/Orders';


export function App() {
  return (
  // Substitui uma div
  // <React.Fragment>
  //   <GlobalStyles/>
  //   <h1>Hello</h1>
  // </React.Fragment>

  // ou

    <>
      <GlobalStyles />
      <Header />
      <Orders/>
    </>


  );
}
