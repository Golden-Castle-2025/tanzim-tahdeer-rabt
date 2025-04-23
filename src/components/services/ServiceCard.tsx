
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-gov-lightblue rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-right">
      <div className="mb-4 rounded-full bg-gov-lightblue inline-flex p-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gov-blue mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-gov-gold hover:text-gov-blue transition-colors"
      >
        المزيد من التفاصيل
        <ArrowLeft size={16} className="mr-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
