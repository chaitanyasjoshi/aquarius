export default function Feature(props) {
  return (
    <div className='col-span-1'>
      <div className='p-6 flex flex-col items-center min-h-full bg-white rounded-md shadow-md'>
        <div className='m-1 p-3 bg-yellow-400 rounded-full'>
          <img
            src={`/icons/${props.icon}.svg`}
            className='h-8 w-8'
            alt={props.icon}
          />
        </div>
        <h5 className='py-1 font-semibold text-xl'>{props.title}</h5>
        <p className='text-gray-600'>{props.desc}</p>
      </div>
    </div>
  );
}
