import ProjectsPage from './projects/ProjectsPage.tsx';
import { useEffect, useState } from 'react';
import * as axios from 'axios';

function App() {

  const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
// const notFoundErrorUrl = 'https://httpstat.us/404';
// const forbiddenErrorUrl = 'https://httpstat.us/4 03';
// const serverErrorUrl = 'https://httpstat.us/500';
// const urls here

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    axios
      .default
      .get(okUrl)
      .then((response) => {
        if (response.status >= 200 || response.status < 300) {
          return response
        } else {
          throw Error(response.data)
        }
      })
      .then((response) => response.data)
      .then((data) => console.log(data))
      .finally(() => {
        setLoading(false);
      })

  }, []);

  return (
    <>
      {loading && <div>loading...</div>}
      <blockquote cite="Benjamin Franklin">
        Tell me and I forget, teach me and I may remember, involve me and I learn.
      </blockquote>

      <div className="container">
        <ProjectsPage />
      </div>
    </>
  );
}

export default App;