
import './App.css'
import PrimarySearchAppBar from './components/Header'
import SkeletonComp from './components/Skeleton'
import MovieCard from './components/Card'
import { useEffect, useState } from 'react'
import { getAll } from './requests/request.js'


function App() {
  const arr = Array.from({ length: 6 })
  const [products, setProducts] = useState([])
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
    getAll('/products')
      .then((data) => {
        setProducts(data);
        setSkeleton(false);
      })
      .catch((error) => console.log(error));

  }, []);

  console.log(products);
  return (
    <>
      <PrimarySearchAppBar />
      <div className='container'>
        <div className='row'>
          {arr && arr.map((s, i) => {
            return <SkeletonComp />
          })}
        </div>
      </div>
      


    </>
  )
}

export default App
