import SearchName from '../SearchName/SearchName'
import PriceRange from '../Pricerenge/PriceRange';
import FindReviews from '../FindReviews/FindReviews';
import FindStock from '../FindStock/FindStock';
import Modal from 'react-modal';
import Ranking from '../Ranking/Ranking';


Modal.setAppElement('#root');
const ModelMobile = ({Models,setModel}) => {


  return (
    <>
      <Modal isOpen={Models} 
       onRequestClose={() => setModel(false)} contentLabel="My Modal">
        <h2>Search</h2>
        <SearchName/>
          <PriceRange/>
          <Ranking/>
            <FindReviews/>
            <FindStock/> 
        
       <div className='d-flex justify-content-between mt-3'>
         <button onClick={() => setModel(false)} 
          className='border-0 px-3 rounded text-white' style={{backgroundColor:'#ED4D2B'}}
          >Close</button>
        <button onClick={() => setModel(false)}
          className='border-0 px-3 py-2 rounded text-white' style={{backgroundColor:'#ED4D2B'}}
          
          >done</button>
       </div>

      </Modal>
          
    </>
  )
}

export default ModelMobile