import React, { useState } from 'react';

function SingleCheckboxGroup({ selected, onChange }) {
 /*  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(prev => (prev === value ? '' : value)); // toggle
  }; */

  return (
    <div className="part-2">
      <label>
        <input
          type="checkbox"
          value="Nonprofit Fundraiser"
          checked={selected === 'Nonprofit Fundraiser'}
          onChange={onChange}
        />
        Nonprofit Fundraiser
      </label>
      <label>
        <input
          type="checkbox"
          value="Nonprofit Stewardship/Cultivation"
          checked={selected === 'Nonprofit Stewardship/Cultivation'}
          onChange={onChange}
        />
        Nonprofit Stewardship/Cultivation
      </label>
      <label>
        <input
          type="checkbox"
          value="Corporate"
          checked={selected === 'Corporate'}
          onChange={onChange}
        />
        Corporate
      </label>
      <label>
        <input
          type="checkbox"
          value="Others"
          checked={selected === 'Others'}
          onChange={onChange}
        />
        Others
      </label>

      {/* Optional: display the selected value */}
      <p>Selected: {selected || 'None'}</p>
    </div>
  );
}

export default SingleCheckboxGroup;

