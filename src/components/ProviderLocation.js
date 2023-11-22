import { useLoadScript } from "@react-google-maps/api"
import Maps from "../components/Maps"

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCu_nShqlMo1o_Z4gqCbrQExC7TBB9AG7o",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Maps />
};
