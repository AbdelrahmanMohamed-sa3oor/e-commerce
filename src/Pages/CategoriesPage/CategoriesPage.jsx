import { useNavigate, useParams } from 'react-router-dom';
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Proucts/Products'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useGetCategoryById } from '../../api/getCategoryById';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useFilteredProducts } from '../../api/SearchProduct';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters} from '../../Redux/Slice/SearchProduct/SearchProduct';
import '../../App.css'
import { useEffect, useState } from 'react';

const CategoriesPage = () => {

  const { id } = useParams();
  const { data } = useGetCategoryById(id);
  const dispatch = useDispatch();
  const Filter = useSelector((state) => state.Filter)
  const navigate= useNavigate()
  // console.log(Filter);
  const [UseFilter, setUseFilter] = useState(false)

  const { data: FilterProduct } = useFilteredProducts(Filter);

  console.log(FilterProduct)
  
  const ResetFilter = () => {
    dispatch(resetFilters())
  }

  useEffect(() => {
    const isFilterActive =
      (Filter.search !== '') ||
      (Filter.inStock !== '') ||
      (Filter.maxPrice !== '') ||
      (Filter.minPrice !== '') ||
      (Filter.category !== '') ||
      (Filter.sort !== '');

    setUseFilter(isFilterActive);
  }, [Filter]);

  return (
    <div className="container-fluid" key={id}>
      <div className="row">
        <div className='col-lg-12 d-lg-flex '>
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">

            <div className="col-3-lg d-flex ms-3 align-items-center">
              <img width={60} height={50} className='rounded-circle me-3 ' src={data?.category?.image || 'no category Now'} alt="" />
              <h5>Category : {data?.category?.name || 'no category Now'}</h5>
            </div>
            <Categories />
            <div className="mt-4">
              <div className="d-lg-flex d-flex justify-content-between align-items-center">
                <span>Found {FilterProduct?.length} products in this category</span>
                <div className="">
                  <button onClick={ResetFilter}
                  className='hover_Reset_Products me-3 position-relative'>
                  Reset Filter
                  {
                    UseFilter ?
                      <span className='ba position-absolute bg-danger rounded-circle p-1 px-2'
                        style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '1px',
                          fontSize: '8px'
                        }}>-</span> :
                      ''
                  }
                </button>
                <button onClick={()=>navigate('/ShowAllProducts')}
                className='hover_Reset_Products '
                >Show All Product</button>
                </div>
                 
              </div>
              {
                FilterProduct?.length === 0 ? (
                  <div className="d-flex flex-column justify-content-center align-items-center text-center text-muted py-5">
                    <HiOutlineShoppingBag size={60} color="#999" />
                    <h5 className="mt-3">No products found in this category</h5>
                    <p className="small">Try exploring other categories or check back later</p>
                  </div>
                ) : (
                  <>
                    <Products Categories={true} products={FilterProduct } />
                  </>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )



}

export default CategoriesPage