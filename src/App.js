import React from 'react';

import {Header} from './Components';
import {Home, Cart} from './pages';
import { Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        {/* render чтобы можно было прокинуть в компоненты пропсы */}
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     const url = 'http://localhost:3000/db.json'
//     axios.get(url).then(({data}) => {
//       this.props.setPizzas(data.pizzas);
//     })
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header/>
//       <div className="content">
//           <Route path="/" render={() => <Home items={this.props.items}/>} exact /> 
//           {/* render чтобы можно было прокинуть в компоненты пропсы */}
//           <Route path="/cart" component={Cart} exact/>
//       </div>
//     </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   }
// }

// const mapDispatchToProps = {
//   setPizzas
// }

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
