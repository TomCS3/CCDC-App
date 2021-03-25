import { useState, useEffect } from 'react'

import Header from './components/Header'
import Publications from './components/Publications'

const App = () => {

  const [publications, setPublications] = useState ([])

  useEffect(() => {
    const getPublications = async () => {
      const publicationsFromServer = await fetchPublications()
      setPublications(publicationsFromServer)
    }
    getPublications()
  }, [])


  const fetchPublications = async () => {
    try {
      const res = await fetch('https://api.test.datacite.org/dois?query=prefix:10.5517')
      const data = await res.json()
      
      return data.data

    } catch (err) {
      console.error(err)
    }
  }

  return (
    
    <div className="bg-light">
      <Header />
      <Publications 
      publications={publications}
      />
    </div>
  );
}

export default App;
