import React, { useState, useEffect } from "react";
import "./SubmitProfile.css";
import "./spMedia.css"
import img from "../../Images/submitProfile.jpg";
import Footer from "../Footer/Footer";

const SubmitProfile = () => {
  const [formStatus, setFormStatus] = useState(""); // For feedback messages
  const [buttonText, setButtonText] = useState("Submit Profile"); // Manage button text

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (buttonText === "Thank You!") return; // Prevent further action while showing "Thank You!"
    setButtonText("Submitting...");

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxRqbx9S5QuyxjR4DQF8rocwL5nVLCmPLZiIi6AKfZlUbTYK7xE7JkYm8VB_hKKIEth/exec";
    const formData = new FormData(e.target);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("Success!", response);
        setFormStatus("Form submitted successfully!");
        setButtonText("Thank You!"); // Update button to "Thank You!"
        e.target.reset(); // Reset the form

        // Reset button to original text after a delay
        setTimeout(() => setButtonText("Submit Profile"), 3000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setFormStatus("An error occurred. Please try again.");
        setButtonText("Submit Profile"); // Reset button text
      });
  };

  return (
    <div className="allComps">
      <div className="bgtMain">
        <div className="bgTexture"></div>
        <div className="bgTexture"></div>
      </div>
      <div className="submit-profile-container wwcf">
        {/* Form Section */}
        <div className="form-section1">
          <h1>Submit Profile</h1>
          <form className="profile-form" onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <div className="form-group">
              <div>
                <label>First name*</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label>Last name*</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Date of Birth*</label>
                <input type="date" name="dob" required />
              </div>
              <div>
                <label>Resident City/Location*</label>
                <input type="text" name="city" placeholder="City" required />
              </div>
              <div>
                <label>PINCODE*</label>
                <input type="text" name="pincode" placeholder="Pincode" required />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Contact Number*</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  required
                />
              </div>
              <div>
                <label>Email address</label>
                <input type="email" name="email" placeholder="Email" />
              </div>
            </div>

            <h2>Creative Information</h2>
            <div className="creative-info">
              <p>
                Interested Field* <br />
                <span>(Select all interested categories to apply)</span>
              </p>

              {/* Acting and Filmmaking */}
              <div className="category">
                <div>
                  <label>Acting</label>
                  <input type="checkbox" name="acting" />
                </div>
                <div>
                  <label>Direction</label>
                  <input type="checkbox" name="direction" />
                </div>
                <div>
                  <label>Production Managing</label>
                  <input type="checkbox" name="productionManaging" />
                </div>
                <div>
                  <label>Filmmaking</label>
                  <input type="checkbox" name="filmmaking" />
                </div>
              </div>

              {/* Writing Section */}
              <h3>Writing</h3>
              <div className="border">
                <div className="category">
                  <div>
                    <label>Screenplay Writing</label>
                    <input type="checkbox" name="screenplayWriting" />
                  </div>
                  <div>
                    <label>Story Writing</label>
                    <input type="checkbox" name="storyWriting" />
                  </div>
                  <div>
                    <label>Anime Writing</label>
                    <input type="checkbox" name="animeWriting" />
                  </div>
                  <div>
                    <label>Manga Writing</label>
                    <input type="checkbox" name="mangaWriting" />
                  </div>
                  <div>
                    <label>Content Writing</label>
                    <input type="checkbox" name="contentWriting" />
                  </div>
                  <div>
                    <label>Novel Writing</label>
                    <input type="checkbox" name="novelWriting" />
                  </div>
                  <div>
                    <label>Advertisement Writing</label>
                    <input type="checkbox" name="advertisementWriting" />
                  </div>
                </div>
              </div>

              {/* Music Section */}
              <h3>Music</h3>
              <div className="border">
                <div className="category">
                  <div>
                    <label>Singing</label>
                    <input type="checkbox" name="singing" />
                  </div>
                  <div>
                    <label>Sound Production</label>
                    <input type="checkbox" name="soundProduction" />
                  </div>
                  <div>
                    <label>Mixing & Mastering</label>
                    <input type="checkbox" name="mixingMastering" />
                  </div>
                  <div>
                    <label>Instrument Playing</label>
                    <input type="checkbox" name="instrumentPlaying" />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div>
                <label>Education</label> <span>(Highest completed education)</span>
                <input type="text" name="education" />
              </div>
              <div>
                <label>Experience</label>{" "}
                <span>(Mention any relevant experience in interested field)</span>
                <input type="text" name="experience" />
              </div>
            </div>

            <div>
              <label>Hobbies*</label>
              <textarea name="hobbies" placeholder="Hobbies" required />
            </div>

            <div>
              <label>
                Upload portfolio/ creative samples* <br />
                <span>
                  (5 different photos of yours with different looks /attires /style /location or any
                  other work related to the field applied. Upload photos/ videos/ documents to a
                  google drive and attach the link below.)
                </span>
              </label>
              <input
                type="text"
                name="portfolio"
                placeholder="Google Drive Link"
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn-profile"
              disabled={buttonText === "Submitting..."}
            >
              {buttonText}
            </button>
          </form>

          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>

        {/* Image Section */}
        <div className="image-section1">
          <img src={img} alt="Creative" />
        </div>
      </div>
    </div>
  );
};

export default SubmitProfile;
