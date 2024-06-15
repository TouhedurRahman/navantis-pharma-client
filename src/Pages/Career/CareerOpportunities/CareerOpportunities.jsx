import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import CareerCardList from '../CareerCardList/CareerCardList';
import useCareers from '../../../Hooks/useCareers';
import Loader from '../../../Components/Loader/Loader';

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
            <div className='px-3 lg:px-5 mt-10 lg:mt-0 lg:border-l-2 lg:border-[#0B5F82]'>
                <div>
                    <div className="flex flex-col lg:flex-row lg:justify-start items-center lg:items-start mb-10 space-x-4 space-y-4 md:space-y-0">
                        <div className='flex justify-center items-center'>
                            <input
                                type="text"
                                placeholder="Search jobs"
                                value={searchTerm}
                                onChange={handleSearch}
                                className="h-12 w-28 border-2 border-r-0 px-3 py-1 rounded-l-full focus:outline-none p-5"
                            />
                            <div className='h-12 flex justify-center items-center border-2 border-l-0 p-3 rounded-r-full  text-[#0B5F82] font-extrabold text-shadow-xl'>
                                <ImSearch />
                            </div>
                        </div>
                        <select
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                            className="h-12 border-2 px-3 py-1 rounded-lg focus:outline-none p-5 cursor-pointer shadow-lg"
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
                            className="h-12 border-2 px-3 py-1 rounded-lg focus:outline-none p-5 cursor-pointer shadow-lg"
                        >
                            <option value="">All Job Locations</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='shadow-lg'>
                    {
                        loading
                            ?
                            <Loader />
                            :
                            <>
                                {filteredCareers.map(career =>
                                    <CareerCardList
                                        key={career._id}
                                        career={career}
                                    ></CareerCardList>
                                )}
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default CareerOpportunities;