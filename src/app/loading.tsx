import { Ellipsis } from "react-css-spinners";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Ellipsis />
      </div>
    </>
  );
}
