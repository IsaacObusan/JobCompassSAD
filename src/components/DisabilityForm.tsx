import React, { useState } from 'react';
import './DisabilityForm.css';

const DisabilityForm: React.FC = () => {
    const [selectedDisabilities, setSelectedDisabilities] = useState({
        visualImpairment: false,
        hearingImpairment: false,
        mobilityImpairment: false,
        cognitiveImpairment: false,
        speechImpairment: false,
        others: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setSelectedDisabilities(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Selected disabilities:', selectedDisabilities);
    };

    return (
        <div className="form-container">
            <form className="disability-form" onSubmit={handleSubmit}>
                <h2>Select Your Disabilities:</h2>
                <label>
                    <input
                        type="checkbox"
                        name="visualImpairment"
                        checked={selectedDisabilities.visualImpairment}
                        onChange={handleChange}
                    />
                    Visual Impairment
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="hearingImpairment"
                        checked={selectedDisabilities.hearingImpairment}
                        onChange={handleChange}
                    />
                    Hearing Impairment
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="mobilityImpairment"
                        checked={selectedDisabilities.mobilityImpairment}
                        onChange={handleChange}
                    />
                    Mobility Impairment
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="cognitiveImpairment"
                        checked={selectedDisabilities.cognitiveImpairment}
                        onChange={handleChange}
                    />
                    Cognitive Impairment
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="speechImpairment"
                        checked={selectedDisabilities.speechImpairment}
                        onChange={handleChange}
                    />
                    Speech Impairment
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="others"
                        checked={selectedDisabilities.others}
                        onChange={handleChange}
                    />
                    Others
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DisabilityForm;

export{}