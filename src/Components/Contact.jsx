

import { useState } from "react";

const Contact = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [result, setResult] = useState("");

    const openForm = () => {
        setFormOpen(!formOpen);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4f0af892-cafe-4e2a-b7c5-24eaebf84b76");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Submitted Successfully");
          console.log("Form Submitted Successfully");
          event.target.reset();
          openForm();
        } else {
          console.log("Error", data);
          setResult(data.message);
          console.log(data.message);
        }
    };

    return (
        <div name="contact">
            <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-center">Let's Talk</h1>
            <div className="flex flex-col justify-center items-center mt-10 lg:mt-20">
                {!formOpen &&
                    <div className="mb-5">
                        <button onClick={openForm} className="bg-black text-gray-300 py-2 px-4 tracking-wide text-3xl rounded-3xl">Get in touch</button>
                    </div>
                }   
                {formOpen &&
                    <div className="flex flex-col w-full lg:w-1/3 sm:w-full md:w-full">
                        <form onSubmit={onSubmit} className="flex flex-col space-y-2">
                            <div className="flex flex-col space-y-2 mb-3">
                                <label>Your name: </label>
                                <input type='text' name='name' placeholder='Enter your name' required className="p-3 rounded-3xl w-full"></input>
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2 mb-3">
                                <label>Phone number: </label>
                                <input type='tel' name='phone' placeholder='Enter your mobile number' required className="p-3 rounded-3xl w-full"></input>
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2 mb-3">
                                <label>Write your message here: </label>
                                <textarea name='message' rows='5' placeholder='Enter your message' required className="p-3 rounded-3xl w-full"></textarea>
                            </div>
                            <button type="submit" className="bg-black text-gray-300 py-2 px-4 tracking-wide text-3xl rounded-3xl">Send</button>
                        </form>
                        {/* {result && <p className="mt-5">{result}</p>} */}
                    </div>
                }
            </div>
        </div>
    )
}

export default Contact;
