import './App.css';

import { useJsonFetch } from './useJsonFetch';

function FetchData({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h3>{url}</h3>
      <h3 className="dataOk">{data && data.title}</h3>
      <h3 className="isLoading">{isLoading && 'Is Loading'}</h3>
      <h3 className="hasError">{hasError && 'Has Error'}</h3>
    </div>
  );
}
// function FetchError({ url }) {
//   const [data, isLoading, hasError] = useJsonFetch(url);
//   return (
//     <div className="App">
//       <h3>{url}</h3>
//       <h3 className="dataOk">{data && data.message}</h3>
//       <h3 className="isLoading">{isLoading && 'Is Loading'}</h3>
//       <h3 className="hasError">{hasError && 'Has Error'}</h3>
//     </div>
//   );
// }
// function FetchLoading({ url, img }) {
//   const [data, isLoading, hasError] = useJsonFetch(url);
//   return (
//     <div className="App">
//       <h3>{url}</h3>
//       <h3 className="dataOk">{data && data.message}</h3>
//       <h3 className="isLoading">{isLoading ? <img src={img} /> : ''}</h3>
//       <h3 className="hasError">{hasError && 'Has Error'}</h3>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <FetchData url='https://jsonplaceholder.typicode.com/todos/1' />
      <hr />
      {/*<FetchError url='https://jsonplaceholder.typicode.com/todos/1' />*/}
      {/*<hr />*/}
      {/*<FetchLoading*/}
      {/*  url='https://jsonplaceholder.typicode.com/todos/1'*/}
      {/*  img='fsdfsfsdfds'*/}
      {/*/>*/}
    </div>
  );
}

export default App;
