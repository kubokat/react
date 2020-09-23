import React from "react";
import { useHistory } from "react-router-dom"
import Field from '../components/form/Field'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import addBook from "../lib/addBook"
import uploadFile from '../lib/uploadFile'
import authors from '../data/authors';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  author: yup.string().required(),
  pages: yup.number().required(),
  minimumPrice: yup.number().required()
});

const authorsList = authors.map(item => item.name);

const AddBook = () => {
  const { register, handleSubmit, errors, formState: { isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('fileUpload', data.image[0]);
    const fileUrl = await uploadFile(formData);
    await addBook({ ...data, image: fileUrl });

    history.push('/')
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl">Add book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field label='Title' errors={errors} InputType='input' name="title" ref={register} />
        <Field label='Description' errors={errors} InputType='textarea' name="description" ref={register} />
        <Field label='Author' errors={errors} InputType='select' name="author" items={authorsList} ref={register} />
        <Field label='Pages' errors={errors} InputType='input' name="pages" ref={register} />
        <Field label='Price' errors={errors} InputType='input' name="minimumPrice" ref={register} />
        <input className="mb-4" type="file" name="image" ref={register} />
        <p><input disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value={isSubmitting? 'Sending...' : 'Send'} /></p>
      </form>
    </div>
  );
}

export default AddBook;
