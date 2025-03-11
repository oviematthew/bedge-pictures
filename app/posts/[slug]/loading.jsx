export default function LoadingSkeleton() {
  return (
    <div className="px-10 md:px-5 md:w-1/2 mx-auto mt-10">
      {/* Back Button & Date */}
      <div className="flex justify-between mb-5 animate-pulse">
        <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>

      {/* Title */}
      <div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-6 mx-auto"></div>

      {/* Image */}
      <div className="h-[500px] w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-6 mx-auto"></div>

      {/* Paragraphs */}
      <div className="space-y-4 animate-pulse">
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
