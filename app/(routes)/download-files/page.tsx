'use client';

import React, { useEffect, useState } from 'react';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { downloadFileInputs } from '@/app/_utils/info';
import { DownloadFormData, DownloadableFile } from 'Files';
import { useForm } from 'react-hook-form';
import FileDownload from 'js-file-download';

import Swal from 'sweetalert2';
import { useSearchParams } from 'next/navigation';

export default function DownloadForm() {
  const searchParams = useSearchParams();
  const [files, setFiles] = useState<DownloadableFile[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<DownloadFormData>({
    defaultValues: {
      contract_file: [searchParams.get('file') as string] ?? [],
    },
  });

  useEffect(() => {
    (async () => {
      const resp = await axiosInterceptorInstance.get<DownloadableFile[]>(
        '/conference/contract-file/'
      );
      setFiles(resp.data);
    })();
  }, []);

  const formSubmitHandler = async (value: DownloadFormData) => {
    const res = await axiosInterceptorInstance.post<DownloadableFile[]>(
      '/conference/contract-form/',
      value
    );
    if (res.status === 201) {
      console.log(res.data);
      res.data.map(async ({ type }) => {
        const res = await axiosInterceptorInstance.get(
          `/conference/contract-form/?filetype=${type}`,
          { responseType: 'blob' }
        );
        console.log(await res.data);
        FileDownload(res.data, `${type}.pdf`);
        reset();
      });
    } else {
      console.log(res.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  const handleChoosenFilesIds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentChoosenFiles = [...watch('contract_file')];

    console.log();
    if (watch('contract_file') === files?.map(({ id }) => id)) {
      setValue('contract_file', []);
    }
    if (e.currentTarget.checked) {
      if (e.currentTarget.value === 'all') {
        setValue('contract_file', files?.map(({ id }) => id) as string[]);
      } else {
        setValue('contract_file', [
          ...currentChoosenFiles,
          e.currentTarget.value,
        ]);
      }
    } else if (!e.currentTarget.checked) {
      const indexOfItemToRemove = currentChoosenFiles.indexOf(
        e.currentTarget.value
      );
      setValue(
        'contract_file',
        currentChoosenFiles.splice(indexOfItemToRemove, 1)
      );
    }
  };

  return (
    <main>
      <section className="section-pad">
        <div className="container">
          <h2 className="title mb-6 md:mb-10">
            Fill this form to <span>download</span> needed files
          </h2>

          <form
            className="row gap-4 md:gap-6"
            onSubmit={handleSubmit(formSubmitHandler)}
          >
            {downloadFileInputs?.map(
              ({ key, title, placeHolder, properties, type, options }, i) => (
                <div
                  className="input-container col-span-12 md:col-span-6 lg:col-span-4"
                  key={i}
                >
                  <label className="main-label mb-2" htmlFor={key}>
                    {title}
                  </label>
                  {type === 'select' ? (
                    <select
                      className={`main-input ${
                        errors?.[key as keyof DownloadFormData] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      {...register(key as keyof DownloadFormData, properties)}
                      value={watch('interested_in') ?? ''}
                    >
                      <option value="" disabled>
                        Choose One
                      </option>
                      {options?.map((item, i) => (
                        <option value={item} key={i}>
                          {item}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className={`main-input ${
                        errors?.[key as keyof DownloadFormData] &&
                        '!border-[#dc3545]'
                      }`}
                      id={key}
                      type={type}
                      placeholder={placeHolder}
                      {...register(key as keyof DownloadFormData, properties)}
                    />
                  )}
                  {errors?.[key as keyof DownloadFormData] && (
                    <p className="text-[#dc3545] text-xs md:text-sm">
                      {errors?.[key as keyof DownloadFormData]?.message}
                    </p>
                  )}
                </div>
              )
            )}
            <div className="files-container col-span-12">
              <div className="text-dark-color font-bold text-lg md:text-xl lg:text-2xl mb-2">
                All Files
              </div>
              <div className="files flex flex-wrap gap-6">
                {files?.map(({ type, id }) => (
                  <div className="input-container flex items-center" key={id}>
                    <input
                      className=" outline-none accent-main-color"
                      type="checkbox"
                      value={id}
                      id={type}
                      checked={watch('contract_file')?.includes(id)}
                      onChange={handleChoosenFilesIds}
                    />
                    <label className="main-label ml-2" htmlFor={type}>
                      {type}
                    </label>
                  </div>
                ))}
                <div className="input-container flex items-center">
                  <input
                    className=" outline-none accent-main-color"
                    type="checkbox"
                    id="all"
                    value={'all'}
                    checked={
                      watch('contract_file').sort().join(' ') ===
                      files
                        ?.map(({ id }) => id)
                        .sort()
                        .join(' ')
                    }
                    onChange={handleChoosenFilesIds}
                  />

                  <label className="main-label ml-2" htmlFor={'all'}>
                    Download All Files
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <button
                className="main-btn !mx-auto !bg-main-color hover:!bg-[#0e202b]"
                type="submit"
              >
                Download
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
