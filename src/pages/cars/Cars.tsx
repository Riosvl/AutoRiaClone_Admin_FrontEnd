import React from 'react';
import { gql, useQuery } from '@apollo/client';

const cars = gql`
  query {
    getAllCars {
      ok
      error
      cars {
        id
        createdAt
        updatedAt
        mark {
          markName
          markRegion
        }
        name
        yearOfCreation
        models {
          year
          engineVolume
        }
      }
    }
  }
`;

export const Cars = () => {
  const { loading, data } = useQuery(cars);

  return (
    <>
      <h1>Cars</h1>
      {loading ? <p>Loading</p> : 'Page ready for using'}
      {data?.getAllCars.cars.mark?.map(({ markName, id }: any) => {
        return (
          <div>
            <p>{id}</p>
            <p>{markName}</p>
          </div>
        );
      })}
      {data?.getAllCars.cars.name}
      {data?.getAllCars.cars.yearOfCreation}
      {data?.getAllCars.cars.models?.map(({ year, engineVolume }: any) => {
        return (
          <div>
            <p>{year}</p>
            <p>{engineVolume}</p>
          </div>
        );
      })}
    </>
  );
};
