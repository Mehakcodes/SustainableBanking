import InvCard from "./InvCard";
const RenewableEnergyFunds = () => {

    const reccommended_projects=[{
        project_name:'Project Name 1',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Technology',
        project_location:'Delhi',
    },
    {
        project_name:'Project Name 2',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Games',
        project_location:'Mumbai',
    },
    {
        project_name:'Project Name 3',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Technology',
        project_location:'Bangalore',
    },
    {
        project_name:'Project Name 4',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Technology',
        project_location:'Chennai',
    },
    {
        project_name:'Project Name 5',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Technology',
        project_location:'Hyderabad',
    },
    {
        project_name:'Project Name 6',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Agriculture',
        project_location:'Pune',
    },
    {
        project_name:'Project Name 7',
        company_name:'Company Name',
        project_image:'https://via.placeholder.com/150',
        project_description:'Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.Project Description goes here njknjkn nbhbjkk nbhknj njbhhbnj jbnuj jkbuibnjkhn juikj uhhukj jkhbn.',
        project_category:'Technology',
        project_location:'Kolkata',
    }
    
];
   
    
    return ( 
        <div className="Renerdy-funds w-full">
            <h1 className="text-2xl font-bold m-5">Renewable Energy Funds</h1>
            <div className=" renew ">
            {
                reccommended_projects.map((project)=>(
                    <InvCard data={project} />
                ))
            }

            </div>
        </div>
     );
}
 
export default RenewableEnergyFunds;