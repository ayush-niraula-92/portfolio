import { useEffect, useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { useNavigate } from "react-router";

const Project = () => {

  const navigate = useNavigate()

  const defaultProjectDetails = [
    {
    projectName : 'Project Name1',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
    {
    projectName : 'Projectasdasd Name',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
    {
    projectName : 'Project Name',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
    {
    projectName : 'Project Name',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
    {
    projectName : 'Project Name',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
    {
    projectName : 'Project Name',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
    {
    projectName : 'Project Name',
    description:'ashdbaksj hasdkja dhasjdh oahda sodhanos dano djasn dokajs doajsdoasijd naosdji anosdja nsdoajis dnoasjid naodlj aosdjsa ',
    imgLink : 'https://thebigsolutions.com/public/frontEnd/images/logo.png',
    features : [
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
      'asjdkbaksdj asdhasdkhadlj lkajsdlkajs d alskjdalkd jalsdkj',
    ],
    previewLink: 'https://www.google.com',
codeLink: 'https://www.nepal.com'

  },
]

const [searchText, setSearchText] = useState('')
const [projectDetails, setProjectDetails] = useState<any>(defaultProjectDetails)

const getSearchText = (e:any) =>{
  setSearchText(e?.target?.value)
}

useEffect(() => {

console.log('Effect triggered', searchText);

    if (!searchText.trim()) {
      // If searchText is empty, show all projects
      setProjectDetails(defaultProjectDetails);
      return;
    }

    // Filter the projects based on searchText
    const filteredProjects = defaultProjectDetails.filter((item) => 
      item?.projectName?.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log('Filtered Projects:', filteredProjects);

    setProjectDetails(filteredProjects);
  
}, [searchText])


  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
           
            <div className="max-w-xl mx-auto p-4">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                {/* Input Field */}
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-1 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your search here..." onChange={getSearchText}
                />
                {/* Search Button */}
                <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-1 rounded-md">
                  🔍 Search
                </button>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">

{

  projectDetails?.length > 0 && 

projectDetails.map((item:any)=>{
  return<>
  <ProjectGrid item={item}/>
  </>
}) }



         </div>

         {
  projectDetails?.length === 0 &&  <>
  <section>
  {/* Container */}
  <div className="px-5 py-16 md:px-10 md:py-10">
    {/* Component */}
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
      
      {/* Icon and Title */}
      <div className="mb-6 text-6xl">
        😔
      </div>

      {/* Heading and Subheading */}
      <h3 className="mb-4 text-4xl font-bold text-gray-800">Data Not Found</h3>
      <p className="mx-auto mb-6 max-w-lg text-lg text-gray-600 sm:text-base md:mb-8">
        We're sorry, but we couldn't find the page you were looking for. It might have been moved or deleted.
      </p>

      {/* Navigation Button */}
      <a
        className="inline-block items-center rounded-md bg-blue-600 hover:bg-blue-700 px-8 py-3 text-center font-semibold text-white transition duration-300"
        onClick={() => navigate('/')}
      >
        Back to Home
      </a>
      
    </div>
  </div>
</section>

</>
}


        </div>
      </section>
    </>
  );
};

export default Project;
