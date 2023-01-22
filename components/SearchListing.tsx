import CodeCard from "./CodeCard";
import AddNew from "./AddNew";

interface SearchListingProps {
  searchData: any;
}

export default function SearchListing({ searchData }: SearchListingProps) {
  const returnResult = () => {
    return (
      <div className="min-h-[45vh] flex items-center justify-center w-full">
        {searchData.length > 0 ? (
          <ul className="mb-8 min-h-[80vh] w-full">
            {searchData.map((item: any, id: any) => (
              <CodeCard key={id} id={id} title={item.title} code={item.code} />
            ))}
          </ul>
        ) : (
          <AddNew />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full  max-w-5xl mt-2">
      <section className="mt-8 w-full">{returnResult()}</section>
    </div>
  );
}
