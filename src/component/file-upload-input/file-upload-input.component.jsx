import React from 'react';
import {useDropzone} from 'react-dropzone';
import './file-upload-input.scss'

const FileUploadInput = ({title}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container mt-5">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p className="blue text-center">{title.toUpperCase()}</p>
      </div>
      <aside>
        <ul className="text-center mt-3" >{files}</ul>
      </aside>
    </section>
  );

}

export default FileUploadInput