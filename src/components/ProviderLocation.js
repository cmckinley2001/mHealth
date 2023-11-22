import { useLoadScript } from "@react-google-maps/api"
import Maps from "../components/Maps"

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "ENTER KEY HERE",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Maps />
};
