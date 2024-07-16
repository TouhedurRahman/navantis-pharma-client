import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LocationFooter = ({ from, to }) => {
    return (
        <div className="pt-2 px-2 text-[12px] bg-[#F8F8F8] font-bold">
            <p className="flex justify-start items-center">
                <Link to={"/"} className='hover:link'>{from.toUpperCase()}</Link>
                <MdArrowRightAlt
                    className="mx-2 text-sm"
                />
                {to.toUpperCase()}
            </p>
        </div>
    );
};

export default LocationFooter;