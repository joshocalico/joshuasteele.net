import { FileQuestion, SearchX, TriangleAlert } from "lucide-react";

export default function Error() {
  return (
    <main className="flex-grow flex justify-center flex-col items-center text-center space-y-4 pb-64">
      <span className="inline-flex">
        <SearchX className="w-20 h-20" />
        <FileQuestion className="w-20 h-20" />
        <TriangleAlert className="w-20 h-20" />
      </span>
      <h1 className=" font-extrabold text-6xl">Nope!</h1>
      <h2 className="text-muted-foreground text-xl">Couldn&apos;t find it.</h2>

      <p>
        This page could be deleted, in progress, or just plain never existed in
        the first place.
      </p>

      <p>Please use the search bar or contact me if you have any issues.</p>

      <p className={"text-muted-foreground"}>Error 404</p>
    </main>
  );
}
