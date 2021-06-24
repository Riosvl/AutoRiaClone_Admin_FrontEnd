import React from 'react';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { FormError } from '../components/form-error';

interface ICreateMarkForm {
  markName: string;
  markRegion: string;
}

const createMarkQuery = gql`
  mutation createMark($createMarkDto: CreateMarkDto!) {
    createMark(input: $createMarkDto) {
      ok
      error
    }
  }
`;

export const CreateMark = () => {
  const {
    register,
    errors,
    handleSubmit,
    getValues,
  } = useForm<ICreateMarkForm>({
    mode: 'onChange',
  });
  console.log(errors);
  const history = useHistory();

  const onCompleted = (data: any) => {
    console.log(data);
    if (data?.createMark.ok) {
      history.push('/marks');
    }
  };
  const [createMarkMutation, { data: any, loading }] = useMutation(
    createMarkQuery,
    {
      onCompleted,
    },
  );
  const onSubmit = () => {
    if (!loading) {
      const { markName, markRegion } = getValues();
      createMarkMutation({
        variables: {
          createMarkDto: {
            markName,
            markRegion,
          },
        },
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: 'MarkName is required' })}
          required
          name="markName"
          placeholder="Введите название марки"
          className="input"
        />
        {errors.markName?.message && (
          <FormError errorMessage={errors.markName?.message} />
        )}
        {errors.markName?.type === 'pattern' && (
          <FormError errorMessage={'Please enter a valid name of the mark'} />
        )}
        <input
          ref={register({ required: 'MarkRegion is required' })}
          required
          name="markRegion"
          placeholder="Введите регион"
          className="input"
        />
        {errors.markRegion?.message && (
          <FormError errorMessage={errors.markRegion?.message} />
        )}
        {errors.markRegion?.type === 'pattern' && (
          <FormError errorMessage={'Please enter a valid region'} />
        )}
        <button role="button">Create</button>
      </form>
      <p>Создание марки</p>
    </div>
  );
};
