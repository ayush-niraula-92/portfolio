const Work = () => {
const workDetails =[
  {
    CompanyName : "Company Name",
    designation : "Designation",
    duration : "2023 - Present",
    description : [
      "Description 1 lorem asdkjas dajsh daishd aid haisdu asidu hasdiuahs diash daiduh asdih asiduh asiduh asdiuahs diaush daisudh aisduha sdiuah diauhsdaidu haid uh aishdai sudh asdha sdasdiauhs dashd asoidha sodihas doashid ",
      "Description 2",
      "Description 3",
      "Description 4",
    ]
  },
  {
    CompanyName : "Company Name",
    designation : "Designation",
    duration : "Duration",
    description : [
      "Description 1",
      "Description 2",
      "Description 3",
      "Description 4",
    ]
  },
  {
    CompanyName : "Company Name",
    designation : "Designation",
    duration : "Duration",
    description : [
      "Description 1",
      "Description 2",
      "Description 3",
      "Description 4",
    ]
  },
]

  return (
    <>
<div className="dark:text-white py-10">
  <div className=" max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flow-root">
      <ul className="-mb-8">



        {workDetails.map((item)=>{
          return(
            <li>
            <div className="relative pb-8">
              <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
              <div className="relative flex items-start space-x-3">
                <div>
                  <div className="relative px-1">
                    <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                      <svg className="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1 py-0">
                  <div className="text-md text-gray-500">
                    <div>
                      <a href="#" className="font-medium dark:text-white mr-2">{item?.CompanyName}</a>
  
                      <a href="#"
                        className="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                        <div className="absolute flex-shrink-0 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                        </div>
                        <div className="ml-3.5 font-medium text-gray-900">{item?.designation}</div>
                      </a>
                    </div>
                    <span className="whitespace-nowrap text-sm">{item?.duration}</span>
                  </div>
                  <div className="mt-2 ">
                    
                <ul className="list-inside space-y-2 ">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
                   
                  </div>
                </div>
              </div>
            </div>
          </li>
         
          )
        })}

    




      </ul>
    </div>
  </div>

</div>
    </>
  );
};

export default Work;



