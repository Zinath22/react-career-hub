import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

   
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='' src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
          </div>
          <div className='mt-4 flex'>
            <h2 className='flex mr-6 '><GrLocation className='text-2xl mr-2 '></GrLocation>{location}</h2>
            <h2 className='flex'><HiOutlineCurrencyDollar className='text-2xl mr-2 '></HiOutlineCurrencyDollar>{salary}</h2>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;