import React, { useState } from 'react';
import SeparatorBody from '../components/SeparatorBody';
import DateCalculator from '../components/DateCalculator';

export default function Contact() {
    // Define state for form data and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        studio: '',
        startDate: '',
        endDate: '',
        workload:''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false); // Track modal visibility

    // Handle form field changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.startDate) newErrors.startDate = 'Start date is required';
        if (!formData.endDate) newErrors.endDate = 'End date is required';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        const validationErrors = validate(); // Validate form

        // If no errors, set the success state
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Data:', formData); // Send form data somewhere or process it

            setIsSubmitted(true); // Mark as submitted
            setErrors({}); // Clear any previous errors
            setShowModal(true); // Show the modal on successful submission
; // Optionally reset form data
        } else {
            setErrors(validationErrors); // Display validation errors
            setIsSubmitted(false); // Do not show success message if errors exist
        }
    };

    // Close modal handler
    const closeModal = () => {
        const saveToJson = () => {
            const jsonData = JSON.stringify(formData, null, 2); // Pretty-print JSON with indentation
    
            // Create a Blob from the JSON data
            const blob = new Blob([jsonData], { type: 'application/json' });
    
            // Create a link element to download the file
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'formData.json'; // The name of the downloaded file
    
            // Append link to body, trigger click, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        setShowModal(false); // Hide the modal
        setFormData((prevData) => ({
            name: '',
            email: '',
            phone: '',
            studio: '',
            startDate: '',
            endDate: '',
            workload: ''
        })); 
    };

    return (
        <body>
        <div className='w-50dvw justify-center'>
            <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>ENQUIRE</h1>
            <SeparatorBody className='flex justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green' />

            <p className='text-gray text-lg justify-center mx-20 my-12 p-2'>
                If you would like to get an estimate for my assistance on your project, or discuss your needs further please use the form below.
            </p>

            <SeparatorBody className='flex justify-center mx-auto h-1 w-3/4 bg-gradient-to-r from-black to-green' />
            <div className='mx-48 my-12 p-2 flex items-center justify-center min-h-screen'>
                <form className='flex flex-col items-start border-2 text-white rounded-md p-2 shadow-xl bg-gradient-to-r from-black to-green' onSubmit={handleSubmit}>
                    <div className='inline-block w-full'>
                        <label htmlFor='name' className="block">Name: </label>
                        {errors.name && <p className='inline justify-center text-red'>{errors.name}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.name && 'border-red'}`}
                        type='text'
                        id='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='email' className="inline">Email: </label>
                        {errors.email && <p className='inline justify-center text-red'>{errors.email}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm w-full my-2  mx-15 ${errors.email && 'border-red'}`}
                        type='email'
                        id='email'
                        placeholder='Email address'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='phone' className="inline">Phone: </label>
                        {errors.phone && <p className='inline justify-center text-red'>{errors.phone}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.phone && 'border-red'}`}
                        type='tel'
                        id='phone'
                        placeholder='Phone number'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='studio' className="inline">Company: </label>
                        {errors.studio && <p className='inline justify-center text-red'>{errors.studio}</p>} {/* Error message */}
                    </div>
                    <input
                        className='border-2 border-gray text-black rounded-sm my-2 w-full mx-15'
                        type='text'
                        id='studio'
                        placeholder='Studio or Developer'
                        value={formData.studio}
                        onChange={handleChange}
                    />
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='startDate' className="inline">Start date: </label>
                        {errors.startDate && <p className='inline justify-center text-red'>{errors.startDate}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.startDate && 'border-red'}`}
                        type='date'
                        id='startDate'
                        value={formData.startDate}
                        onChange={handleChange}
                    />
 
                    <br />
                    <div className='inline-block w-full'>
                        <label htmlFor='endDate' className="inline">End date: </label>
                        {errors.endDate && <p className='inline justify-center text-red'>{errors.endDate}</p>} {/* Error message */}
                    </div>
                    <input
                        className={`border-2 border-gray text-black rounded-sm my-2 w-full mx-15 ${errors.endDate && 'border-red'}`}
                        type='date'
                        id='endDate'
                        value={formData.endDate}
                        onChange={handleChange}
                    />

                    <div className='workload w-full m-4'>
                      <label className='justify-start m-12 p-10'><span className='font-semibold  '>Type of work:</span> </label>
                      <br></br>
                        <div className='flex flex-col-2 gap-5 m-4'>
                          <div>
                            <input type='checkbox' id='soundDesign' name='workload' value='soundDesign'/>
                            <label htmlFor='soundDesign'> Sound Design</label>
                          </div>                       
                          <div>
                            <input type='checkbox' id='technicalSoundDesign' name='workload' value='technicalSoundDesign'/>
                            <label htmlFor='technicalSoundDesign'> Technical Sound Design</label>
                          </div>
                          <div>
                            <input type='checkbox' id='implementation' name='workload' value='implementation'/>
                            <label htmlFor='implementation'> Engine implementation</label>
                          </div>
                          <div>
                            <input type='checkbox' id='dialogueEditing' name='workload' value='dialogueEditing'/>
                            <label htmlFor='dialogueEditing'> Dialogue Editing</label>
                          </div>
                          {errors.workload && <p className='text-red'>{errors.workload}</p>} {/* Error message */}
                        </div>
                    </div>
                   
                    <br />

                    <input
                        type='submit'
                        className='mx-auto my-8 p-4 border-2 text-black rounded-lg bg-gradient-to-t from-gray to-white shadow-xl'
                    />
                </form>
                
                {/* Success message */}
                {showModal && (
                    <div className='fixed inset-0 w-full bg-gray bg-opacity-75 flex m-auto justify-center items-center'>

                        <div className='bg-white p-16 rounded shadow-lg'>
                            <h2 className='text-2xl font-bold mb-4'>Thank you for your interest!</h2>
                            <p>Your form has been successfully submitted. Please find below an estimated cost for my services.</p>
                            <p>A detailed copy of this quote will be sent to the email address provided above.</p>
                            <br></br>
                            <DateCalculator startDate={formData.startDate} endDate={formData.endDate}/>
                            <br></br>
                            <button className='mt-4 p-2 bg-green text-white rounded' onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </body>
    );
}

