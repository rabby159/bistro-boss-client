import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mb-5 md:w-3/12 text-center mx-auto'>
            <p className='text-yellow-500'>--{subHeading}--</p>
            <h2 className='text-3xl border-y-2 py-2'>{heading}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;