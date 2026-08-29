import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";

export default function Loading() {
  return (
    <div>
      <Header />
      <Loader visible />
    </div>
  );
}
