import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  Contact.propTypes = {
    listing: PropTypes.shape({
      userRef: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // Add other properties of listing here...
    }).isRequired,
  };

  useEffect(() => {
    const fetchLandlordDetails = async () => {
      try {
        const response = await fetch(`/api/user/${listing.userRef}`);
        const landlordData = await response.json();
        setLandlord(landlordData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLandlordDetails();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Reach out to{" "}
            <span className="font-semibold">{landlord.username}</span>&nbsp;
            regarding{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={handleChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Inquiry about ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
