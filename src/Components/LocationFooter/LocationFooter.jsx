import { MdArrowRightAlt } from 'react-icons/md';

const LocationFooter = ({ from, to }) => {
    return (
        <div className="pt-2 px-2 text-[12px] bg-[#F8F8F8] font-bold">
            <p className="flex justify-start items-center">
                {from.toUpperCase()}
                <MdArrowRightAlt
                    className="mx-2 text-sm"
                />
                {to.toUpperCase()}
            </p>
        </div>
    );
};

export default LocationFooter;