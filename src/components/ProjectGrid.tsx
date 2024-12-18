
const ProjectGrid = ({item:item}:{item:any}) => {
  return (
    <>
            <div className="mx-auto flex w-full max-w-md flex-col items-start rounded-md border border-gray-300 p-8">
              <div className="mb-4 rounded-md bg-black px-4 py-1.5">
                <p className="text-sm font-bold text-white sm:text-sm">{item?.projectName}</p>
              </div>
              <p className="mb-6 text-base font-light text-gray-500 md:mb-10 lg:mb-12">
                {item?.description}
              </p>

              {/* Replaced Pricing with an Image */}
              <div className="mb-5 lg:mb-8">
                <img
                  src={item?.imgLink}
                  alt="Project Image"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>

              {item?.features?.map((resp:any)=>{
                return (
                    <div className="mt-2 flex items-center ">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                      alt=""
                      className="mr-2 inline-block w-4"
                    />
                    <p className=" text-sm">{resp}</p>
                  </div>
                )
              })}

            
             
              <div className="mt-auto w-full flex justify-between">
                <a
                  href={item?.previewLink}
                  className="m-2 w-full rounded-md  px-6 py-3 text-center font-semibold dark:text-white underline"
                >
                  Preview
                </a>
                <a
                  href={item?.codeLink} target="_blank"
                  className="m-2 w-full rounded-md  px-6 py-3 text-center font-semibold dark:text-white underline"
                >
                  Code
                </a>
              </div>
            </div>
    </>
  )
}

export default ProjectGrid