import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import useCareers from '../../../Hooks/useCareers';
import Loader from '../../../Components/Loader/Loader';
import CareerCardList from '../../Career/CareerCardList/CareerCardList';

const CareerOpportunities = () => {
    const [careers, loading] = useCareers();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const departments = [...new Set(careers.map(career => career.department))];
    const locations = [...new Set(careers.map(career => career.location))];

    const filteredCareers = careers.filter(career =>
        (career.designation.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedDepartment === '' || career.department === selectedDepartment) &&
        (selectedLocation === '' || career.location === selectedLocation)
    );

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    return (
        <div>
            <div className='px-3 lg:px-5 mt-10 lg:mt-0'>
                <p className='text-2xl font-bold text-center mb-10'>
                    Career Opportunities
                </p>
                <div>
                    {
                        careers.length !== 0
                        &&
                        <div className="flex flex-col lg:flex-row lg:justify-start items-center lg:items-start mb-10 lg:space-x-4 space-y-4 lg:space-y-0">
                            <div className='flex justify-center items-center w-full lg:w-auto'>
                                <input
                                    type="text"
                                    placeholder="Search by designation"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="h-12 w-full border-2 border-r-0 px-3 py-1 rounded-l-lg focus:outline-none lg:w-52 lg:p-5"
                                />
                                <div className='h-12 flex justify-center items-center border-2 border-l-0 p-3 rounded-r-lg text-gray-700 font-extrabold text-shadow-xl'>
                                    <ImSearch />
                                </div>
                            </div>
                            <select
                                value={selectedDepartment}
                                onChange={handleDepartmentChange}
                                className="h-12 w-full border-2 px-3 py-1 rounded-lg focus:outline-none p-5 cursor-pointer shadow-lg lg:w-auto"
                            >
                                <option value="">All Departments</option>
                                {departments.map((department, index) => (
                                    <option key={index} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={selectedLocation}
                                onChange={handleLocationChange}
                                className="h-12 w-full border-2 px-3 py-1 rounded-lg focus:outline-none p-5 cursor-pointer shadow-lg lg:w-auto"
                            >
                                <option value="">All Job Locations</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                    }
                </div>
                <div>
                    {
                        filteredCareers.length === 1
                            ?
                            <>
                                {
                                    loading
                                        ?
                                        <Loader />
                                        :
                                        <div className='shadow-lg'>
                                            <>
                                                {
                                                    filteredCareers.map(career =>
                                                        <CareerCardList
                                                            key={career._id}
                                                            career={career}
                                                        ></CareerCardList>
                                                    )
                                                }
                                            </>
                                        </div>
                                }
                            </>
                            :
                            <div className='flex justify-center items-center text-xl font-bold text-gray-500'>
                                <p className='text-center'>
                                    No jobs are available right now. See our contact us page and stay connected with us for more updates.
                                </p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CareerOpportunities;