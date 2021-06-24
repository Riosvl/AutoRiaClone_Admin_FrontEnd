import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const marks = gql`
  query {
    getAllMarks {
      ok
      error
      marks {
        markName
        id
      }
    }
  }
`;

export const Mark = () => {
  const { loading, data } = useQuery(marks);

  return (
    <>
      <Link to="/marks/createMark">Create Mark</Link>
      <h1>Marks</h1>
      {loading ? <p>Loading</p> : 'Page ready for using'}
      {data?.getAllMarks.marks?.map(({ markName, id }: any) => {
        return (
          <div>
            <p>{id}</p>
            <p>{markName}</p>
          </div>
        );
      })}
    </>
  );
};
