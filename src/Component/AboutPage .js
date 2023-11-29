import React from 'react';
import backgroundImage from '../Images/bg-image.png'
const AboutPage = () => {
  return (
    <div>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"   style={{
      background: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 'auto', 
      
    }}>
      <header className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Welcome to Note Suit
        </h1>
        <p className="text-lg md:text-xl text-center text-white">
          At Note Suit, we believe in the power of capturing ideas, thoughts, and inspirations effortlessly. Our platform is designed to be your personal companion in the digital world, simplifying the way you gather, organize, and access your notes—anytime, anywhere.
        </p>
      </header>

      <section className="max-w-3xl mx-auto mt-10">
        <div className=" rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Note Suit?
          </h2>
          <p className="text-lg text-white">
            Note Suit is more than just a note-taking app; it's a versatile, intuitive, and secure platform that enables you to transform fleeting ideas into lasting creations. With seamless cloud integration, your notes are safeguarded and easily accessible across all your devices.
          </p>
        </div>

        <div className=" rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Key Features
          </h2>
          <ul className="text-lg text-white list-disc pl-6">
            <li>Effortless Note-Taking: Capture your ideas on the go with ease using our user-friendly interface.</li>
            <li>Cloud Storage: Your notes are securely stored in the cloud, ensuring they're never lost and always available.</li>
            <li>Organization Made Simple: Categorize and organize your notes into customizable folders for easy retrieval.</li>
            <li>Collaboration and Sharing: Share notes effortlessly with friends, colleagues, or collaborators, fostering seamless teamwork.</li>
            <li>Cross-Device Sync: Access your notes across various devices—mobile, tablet, or desktop—without missing a beat.</li>
          </ul>
        </div>

        {/* Other sections... */}

      </section>

      <footer className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Get Started Today
        </h2>
        <p className="text-lg text-white">
          Experience the convenience and power of Note Suit. Sign up now and embark on a seamless note-taking journey that enhances your productivity and creativity. Welcome aboard!
        </p>
      </footer>
    </div>
    </div>
  );
};

export default AboutPage;
