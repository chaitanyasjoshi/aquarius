import { useState, useEffect } from 'react';

export default function Product(props) {
  const [tab, setTab] = useState(1);
  const [models, setmodels] = useState(props.specs[0].models);
  const [image, setImage] = useState(props.specs[0].image);
  const [series, setSeries] = useState('');
  const [model, setModel] = useState('');
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    if (models) {
      setModel(models[0].model);
    }
  }, [models]);

  useEffect(() => {
    if (models && model) {
      for (let index = 0; index < models.length; index++) {
        if (models[index].model === model) {
          setSpecs(models[index].props);
          break;
        }
      }
    }
  }, [model, models]);

  const handleModelsChange = (event) => {
    for (let index = 0; index < props.specs.length; index++) {
      if (props.specs[index].series === event.target.value) {
        setSeries(props.specs[index].series);
        setImage(props.specs[index].image);
        setmodels(props.specs[index].models);
        break;
      }
    }
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <div className='mt-10' data-aos='zoom-y-out'>
      <h3 className='text-3xl lg:text-4xl text-gray-800 text-center font-bold'>
        {props.desc.name}
      </h3>
      <div className='mt-10 lg:p-3 lg:h-80 flex flex-col lg:flex-row shadow-md rounded-md bg-white overflow-hidden'>
        <img
          className='p-3 lg:w-96 pointer-events-none m-auto'
          src={`/images/products/${image}.jpg`}
          alt={image}
        />
        <div className='p-3 lg:ml-5 lg:p-0 flex flex-col flex-grow'>
          <header className='flex justify-around'>
            <p
              onClick={() => setTab(1)}
              className={`pb-2 w-1/3 font-medium text-center text-gray-900 border-b-2 border-gray-200 cursor-pointer ${
                tab === 1 ? 'border-b-4 border-yellow-300' : ''
              } transition-colors duration-300 ease-in`}
            >
              Description
            </p>
            <p
              onClick={() => setTab(2)}
              className={`pb-2 w-1/3 font-medium text-center text-gray-900 border-b-2 border-gray-200 cursor-pointer ${
                tab === 2 ? 'border-b-4 border-yellow-300' : ''
              } transition-colors duration-300 ease-in`}
            >
              Features
            </p>
            <p
              onClick={() => setTab(3)}
              className={`pb-2 w-1/3 font-medium text-center text-gray-900 border-b-2 border-gray-200 cursor-pointer ${
                tab === 3 ? 'border-b-4 border-yellow-300' : ''
              } transition-colors duration-300 ease-in`}
            >
              Specs
            </p>
          </header>
          {tab === 1 ? (
            <article className='py-2 lg:pr-2 overflow-auto'>
              {props.desc.details}
            </article>
          ) : tab === 2 ? (
            <article className='py-2 pl-5 overflow-auto'>
              <ul style={{ color: '#01A5AE' }}>
                {props.features.map((feature, i) => (
                  <li className='list-disc' key={i}>
                    <span className='text-gray-800'>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : (
            <article className='p-2 flex flex-col overflow-auto'>
              <div className='flex'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Series
                  </label>
                  <select
                    id='series'
                    name='series'
                    onChange={handleModelsChange}
                    value={series}
                    className='block mt-1 py-1 px-3 pr-9 w-auto border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400'
                  >
                    {props.specs.map((product, i) => (
                      <option value={product.series} key={i}>
                        {product.series}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='ml-3'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Model
                  </label>
                  <select
                    id='model'
                    name='model'
                    onChange={handleModelChange}
                    value={model}
                    className='block mt-1 py-1 px-3 pr-9 w-auto border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400'
                  >
                    {models.map((product, i) => (
                      <option value={product.model} key={i}>
                        {product.model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='py-2'>
                <table className='min-w-full'>
                  <tbody>
                    {specs.map((property, i) => (
                      <tr key={i}>
                        <td className='whitespace-nowrap'>
                          <div className='text-gray-700'>{property.name}</div>
                        </td>
                        <td className='px-6 text-right whitespace-nowrap'>
                          <div className='font-medium text-gray-900'>
                            {property.value}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
