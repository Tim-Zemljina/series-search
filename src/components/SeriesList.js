function SeriesList({ series }) {
    return(
        <div className='flex overflow-x-auto space-x-6 w-full max-w-5xl'>
        {series.length > 0 ? (
             series.map((s) => (
                <div 
                key={s.id}
                className='bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 flex-none w-72 flex flex-col items-center'>
      
                  <img src={s.image.medium} alt={s.name}  className='w-70 h-70 object-cover rounded-md mb-4 mt-4'/>
                  <h3 className='text-xl font-bold mb-2 text-blue-500'>{s.name}</h3>
                  <p className='text-gray-400 text-sm h-auto'>{s.summary?.replace(/<\/?[^>]+>/gi, '') || "No description for this show"}</p>
                </div>  
              ))
        ) : (
            <></>
        )}
       
      </div>
    )
}

export default SeriesList;


