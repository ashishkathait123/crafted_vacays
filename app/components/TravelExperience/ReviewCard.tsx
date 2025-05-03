interface ReviewCardProps {
  name: string;
  review: string;
  image: string;
}

export default function ReviewCard({ name, review, image }: ReviewCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-4 h-full">
      <p className="text-gray-700">{review}</p>
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <strong className="text-sm text-gray-900">{name}</strong>
      </div>
    </div>
  );
}
