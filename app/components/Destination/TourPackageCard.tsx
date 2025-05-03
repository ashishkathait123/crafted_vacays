'use client';
interface PackageProps {
    pkg: {
      id: number;
      title: string;
      excerpt: string;
      thumbnail: string;
      price: string;
      duration: string;
    };
  }
  
  export default function TourPackageCard({ pkg }: PackageProps) {
    return (
      <div className="rounded-xl shadow-md overflow-hidden bg-white transition hover:shadow-lg">
        <img src={pkg.thumbnail} alt={pkg.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
          <div
            className="text-sm text-gray-600 mb-2"
            dangerouslySetInnerHTML={{ __html: pkg.excerpt }}
          />
          <div className="text-sm text-gray-800">
            <p><strong>Price:</strong> {pkg.price}</p>
            <p><strong>Duration:</strong> {pkg.duration}</p>
          </div>
        </div>
      </div>
    );
  }
  