import AppLogo from "@/components/app-logo";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
             
              <AppLogo/>
              <span className="text-2xl text-blue-400 font-bold">DEEP-TZ</span>
              
            </div>
            <p className="text-gray-300 mb-4">
              DARRUS EXCELLENCE IN EDUCATION PROGRAM - Empowering learners and transforming futures 
              through quality digital education in Tanzania and beyond.
            </p>
            
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-gray-700 transition-colors">Home</a></li>
              <li><a href="/programs" className="hover:text-gray-700 transition-colors">Programs</a></li>
              <li><a href="/about" className="hover:text-gray-700 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-gray-700 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="hover:text-gray-700 transition-colors">English Course</span></li>
              <li><span className="hover:text-gray-700 transition-colors">Resitting Program</span></li>
              <li><span className="hover:text-gray-700 transition-colors">Online Tuition</span></li>
              <li><span className="hover:text-gray-700 transition-colors">Study Materials</span></li>
            </ul>
          </div>
   
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to get the latest news and updates.</p>
                <form action="#" className="space-y-2" method="">

                    <input type="email" name="email" placeholder="Enter your email" className="w-full p-2 rounded-md border border-gray-700" />
                    <div className="flex items-center justify-end py-2">
                        <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded-md">Subscribe</button>
                    </div>
                </form>
           
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Transforming education through innovation • Built with care for Tanzanian learners</p>
          <p className="text-sm text-gray-400 pt-4">
              © 2025 DARRUS EXCELLENCE IN EDUCATION PROGRAM. All rights reserved.
            </p>
            
        </div>
      </div>
    </footer>
  );
};

export default Footer;