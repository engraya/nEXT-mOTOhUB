import PagesWrapper from '@components/PagesWrapper'
import React from 'react'
import SearchBar from '@components/Searchbar'
import CustomFilter from '@components/CustomFilter'
import { fuels, yearsOfProduction } from '@constatnts'
import { HomeProps } from '@types'
import { fetchCars } from '@utils'
import ShowMore from '@components/ShowMore'
import CarCard from '@components/CarCard'
export default async function page({ searchParams }: HomeProps) {

    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
      });
    
      const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <PagesWrapper>
          <div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
      <div className="text-center">
        <p className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Explore Your Favourites</p>
      </div>
    </div>
  </div>

          </div>
              <div className='home__filters'>
            <SearchBar />
            <CustomFilter title='Select Year' options={yearsOfProduction} />
            <CustomFilter title='Select Fuel' options={fuels} />
 
        </div>
        {!isDataEmpty ? (
          <div>
            <div className='mx-auto grid grid-cols-2 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
              {allCars?.map((car) => (
                <CarCard car={car} key={car}/>
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </div>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>No Car Results Found....Try again</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
    </PagesWrapper>
  )
}
