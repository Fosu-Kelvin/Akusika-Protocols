import React, { useState } from 'react';

function SingleCheckboxGroup2({ selected, onChange }) {
 /*  const [selectedSource, setSelectedSource] = useState(''); */

/*   const handleChange = (e) => {
    const value = e.target.value;
    setSelectedSource(prev => (prev === value ? '' : value)); // toggle on/off
  };
 */
  return (
    <div className="part-2">
      <label>
        <input
          type="checkbox"
          value="Akusika Protocols Client"
          checked={selected === 'Akusika Protocols Client'}
          onChange={onChange}
        />
        Akusika Protocols Client
      </label>

      <label>
        <input
          type="checkbox"
          value="Instagram/Facebook"
          checked={selected === 'Instagram/Facebook'}
          onChange={onChange}
        />
        Instagram/Facebook
      </label>

      <label>
        <input
          type="checkbox"
          value="Online Search"
          checked={selected === 'Online Search'}
          onChange={onChange}
        />
        Online Search
      </label>

      <label>
        <input
          type="checkbox"
          value="Friend"
          checked={selected === 'Friend'}
          onChange={onChange}
        />
        Friend
      </label>

      {/* Optional display */}
      <p>Selected Source: {selected || 'None'}</p>
    </div>
  );
}

export default SingleCheckboxGroup2;
