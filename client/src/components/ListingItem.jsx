import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

function ListingItem({ listing }) {
  // Destructure properties from listing for cleaner code
  const { _id, imageUrls, name, address, description, offer, discountPrice, regularPrice, type, bedrooms, bathrooms } = listing;

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${_id}`}>
        <img
          src={imageUrls[0] || "https://i.pinimg.com/564x/f7/2c/37/f72c37e547c58ee8bc4ef0aae4958c34.jpg"}
          alt={`${name}-picture`}
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">{name}</p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">{address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <p className="text-slate-500 mt-2 font-semibold ">
            $
            {offer ? discountPrice.toLocaleString("en-US") : regularPrice.toLocaleString("en-US")}
            {type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs">{bedrooms > 1 ? `${bedrooms} beds ` : `${bedrooms} bed `}</div>
            <div className="font-bold text-xs">{bathrooms > 1 ? `${bathrooms} baths ` : `${bathrooms} bath `}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    offer: PropTypes.bool.isRequired,
    discountPrice: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListingItem;
