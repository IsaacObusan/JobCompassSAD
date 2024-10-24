import React, { useState } from 'react';
import './CreateAccountForm.css';

const CreateAccountForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        skills: '',
        experience: '',
        portfolio: '',
        resume: null as File | null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] })); // Non-null assertion added here
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Process the form submission (e.g., send data to API)
        console.log('Form submitted:', formData);
    };

    return (
        <form className="create-account-form" onSubmit={handleSubmit}>
            <h2>Create Your Account</h2>

            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />

            <label htmlFor="skills">Skills</label>
            <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
            />

            <label htmlFor="experience">Experience</label>
            <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
            />

            <label htmlFor="resume">Upload Resume/CV</label>
            <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
            />

            <label htmlFor="portfolio">Portfolio Link</label>
            <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                required
            />

            <button type="submit">Create Account</button>
        </form>
    );
};

export default CreateAccountForm;

export{}
